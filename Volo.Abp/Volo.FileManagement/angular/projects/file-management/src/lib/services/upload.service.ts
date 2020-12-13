import { Injectable, OnDestroy, Inject } from '@angular/core';
import { take, bufferTime, filter, map } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';
import {
  LocalizationService,
  ApiInterceptor,
  EnvironmentService,
} from '@abp/ng.core';
import { Uppy, UppyFile } from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { NavigatorService } from './navigator.service';
import { FileDescriptorService } from '../proxy/files/file-descriptor.service';
import { UpdateStreamService } from './update-stream.service';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { FILE_MANAGEMENT_XSRF_HEADER_NAME } from '../tokens/extensions.token';

export type ChosenFile = {
  name: string;
  size: number;
};

/* tslint:disable:no-string-literal */
@Injectable()
export class UploadService implements OnDestroy {
  uppy: Uppy;

  resource: { [key: string]: string };

  filesAlreadyChecked = false;

  subscriptions: Subscription[] = [];

  onBeforeUpload = (files: { [key: string]: UppyFile<{}, {}> }) => {
    if (this.filesAlreadyChecked) {
      return true;
    }
    this.checkFilesForUpload(files);
    return false;
  };

  cancelModal = () => {
    this.uppy.cancelAll();
    const dashboard = this.uppy.getPlugin('Dashboard') as Dashboard;
    if (dashboard.isModalOpen()) {
      dashboard.closeModal();
    }
  };

  getPreInfo = (files: ChosenFile[]) => {
    this.callPreInfoWithFiles(files)
      .pipe(
        filter((result) => result.length > 0),
        map(this.findAnyIfExistOrInvalidName)
      )
      .subscribe((result) => {
        if (result.doesExist) {
          this.giveExistFileWarning();
        }

        if (result.hasInvalidName) {
          this.giveInvalidFileNameWarning(result.fileName);
        }
      });
  };

  constructor(
    private localization: LocalizationService,
    private navigator: NavigatorService,
    private fileService: FileDescriptorService,
    private confirmation: ConfirmationService,
    private updateStream: UpdateStreamService,
    private apiInterceptor: ApiInterceptor,
    private environmentService: EnvironmentService,
    private httpXsrfToken: HttpXsrfTokenExtractor,
    @Inject(FILE_MANAGEMENT_XSRF_HEADER_NAME) private headerName: string
  ) {}

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((s) => s.unsubscribe());
    }
  }

  initUppy({ trigger }) {
    const headers = this.apiInterceptor.getAdditionalHeaders();
    headers[this.headerName] = this.httpXsrfToken.getToken();
    this.subscriptions.push(
      this.localization
        .getResource$('FileManagement')
        .pipe(take(1))
        .subscribe((resource) => {
          this.resource = resource;
          this.uppy = new Uppy({
            onBeforeUpload: this.onBeforeUpload,
          })
            .use(Dashboard, {
              trigger,
              inline: false,
              target: 'body',
              metaFields: [
                {
                  id: 'name',
                  name: resource['Name'],
                  placeholder: resource['FileName'],
                },
              ],
              browserBackButtonClose: true,
              proudlyDisplayPoweredByUppy: false,
              onRequestCloseModal: this.cancelModal,
              locale: {
                strings: this.getTranslations(),
              },
            })
            .use(XHRUpload, {
              endpoint: this.getRawApiUrl(),
              formData: true,
              fieldName: 'file',
              headers,
            });
        })
    );

    this.subscriptions.push(
      fromEvent(this.uppy, 'file-added')
        .pipe(
          map((files) => files[0]),
          bufferTime(500),
          filter((args) => args.length > 0)
        )
        .subscribe(this.getPreInfo)
    );

    this.subscriptions.push(
      fromEvent(this.uppy, 'complete').subscribe((_) => {
        this.cancelModal();
        this.updateStream.updateContent();
      })
    );

    return this.subscriptions;
  }

  giveInvalidFileNameWarning(fileName: string) {
    this.uppy.info(
      this.resource['FileManagement:0002'].replace('{FileName}', fileName),
      'error',
      7000
    );
  }

  giveExistFileWarning() {
    this.uppy.info(this.resource['FilesAlreadyExist'], 'warning', 7000);
  }

  private checkFilesForUpload(files) {
    this.callPreInfoWithFiles(Object.values(files)).subscribe((result) => {
      const filesWithInvalidNames = result.filter((f) => !f.hasValidName);
      if (filesWithInvalidNames.length) {
        const messageParam = filesWithInvalidNames
          .map((f) => `'${f.fileName}'`)
          .join(', ');
        this.confirmation.error('FileManagement::NotValidFileNames', '', {
          messageLocalizationParams: [messageParam],
          hideCancelBtn: true,
          yesText: 'AbpUi::Ok',
        });
      } else {
        const filesAlreadyExist = result.filter((f) => f.doesExist);
        if (filesAlreadyExist.length) {
          const messageParam = filesAlreadyExist
            .map((f) => `'${f.fileName}'`)
            .join(', ');
          this.confirmation
            .warn(
              'FileManagement::FilesWillBeOverrided',
              'FileManagement::AreYouSure',
              {
                messageLocalizationParams: [messageParam],
              }
            )
            .pipe(
              take(1),
              filter((status) => status === Confirmation.Status.confirm)
            )
            .subscribe((_) => this.callUppyUpload());
        } else {
          this.callUppyUpload();
        }
      }
    });
  }

  private callUppyUpload() {
    this.filesAlreadyChecked = true;
    this.updateXHREndpoint();
    this.uppy.upload();
    this.filesAlreadyChecked = false;
  }

  private updateXHREndpoint() {
    const directoryId = this.navigator.getCurrentFolderId();
    const xhr = this.uppy.getPlugin('XHRUpload');
    if (directoryId) {
      xhr.setOptions({
        endpoint: this.getRawApiUrl() + '?directoryId=' + directoryId,
      });
    } else {
      xhr.setOptions({ endpoint: this.getRawApiUrl() });
    }
  }

  private getRawApiUrl() {
    return (
      this.environmentService.getApiUrl('FileManagement') +
      `/api/file-management/file-descriptor/upload`
    );
  }

  private callPreInfoWithFiles(files) {
    const currentId = this.navigator.getCurrentFolderId();
    return this.fileService.getPreInfo(
      files.map((f) => ({
        fileName: f.meta.name,
        size: f.size,
        directoryId: currentId,
      }))
    );
  }

  private findAnyIfExistOrInvalidName(
    result: { doesExist: boolean; hasValidName: boolean; fileName: string }[]
  ) {
    return result.reduce(
      (cumul, curr) => ({
        doesExist: cumul.doesExist || curr.doesExist,
        hasInvalidName: cumul.hasInvalidName || !curr.hasValidName,
        fileName: curr.hasValidName ? cumul.fileName : curr.fileName,
      }),
      {
        doesExist: false,
        hasInvalidName: false,
        fileName: '',
      }
    );
  }

  private getTranslations() {
    return {
      closeModal: this.resource['CloseModal'],
      addMoreFiles: this.resource['AddMoreFiles'],
      addingMoreFiles: this.resource['AddingMoreFiles'],
      importFrom: this.resource['ImportFrom'],
      dashboardWindowTitle: this.resource['DashboardWindowTitle'],
      dashboardTitle: this.resource['DashboardTitle'],
      copyLinkToClipboardSuccess: this.resource['CopyLinkToClipboardSuccess'],
      copyLinkToClipboardFallback: this.resource['CopyLinkToClipboardFallback'],
      copyLink: this.resource['CopyLink'],
      fileSource: this.resource['FileSource'],
      done: this.resource['Done'],
      back: this.resource['Back'],
      removeFile: this.resource['RemoveFile'],
      editFile: this.resource['EditFile'],
      editing: this.resource['Editing'],
      edit: this.resource['Edit'],
      finishEditingFile: this.resource['FinishEditingFile'],
      saveChanges: this.resource['SaveChanges'],
      myDevice: this.resource['MyDevice'],
      dropPasteImport: this.resource['DropPasteImport'],
      dropPaste: this.resource['DropPaste'],
      dropHint: this.resource['DropHint'],
      browse: this.resource['Browse'],
      uploadComplete: this.resource['UploadComplete'],
      uploadPaused: this.resource['UploadPaused'],
      resumeUpload: this.resource['ResumeUpload'],
      pauseUpload: this.resource['PauseUpload'],
      retryUpload: this.resource['RetryUpload'],
      cancelUpload: this.resource['CancelUpload'],

      xFilesSelected: {
        0: this.resource['FileSelected'],
        1: this.resource['NFileSelected'],
      },
      uploadingXFiles: {
        0: this.resource['UploadingFile'],
        1: this.resource['NUploadingFile'],
      },
      processingXFiles: {
        0: this.resource['ProcessingFile'],
        1: this.resource['NProcessingFile'],
      },

      uploading: this.resource['Uploading'],
      complete: this.resource['Complete'],

      uploadFailed: this.resource['UploadFailed'],
      paused: this.resource['Paused'],
      retry: this.resource['Retry'],
      cancel: this.resource['Cancel'],

      filesUploadedOfTotal: {
        0: this.resource['FileUploadedOfTotal'],
        1: this.resource['NFileUploadedOfTotal'],
      },

      dataUploadedOfTotal: this.resource['DataUploadedOfTotal'],

      xTimeLeft: this.resource['XTimeLeft'],

      uploadXFiles: {
        0: this.resource['UploadFile'],
        1: this.resource['UploadXFiles'],
      },

      uploadXNewFiles: {
        0: this.resource['UploadNewFile'],
        1: this.resource['UploadXNewFile'],
      },
    };
  }
}
/* tslint:enable:no-string-literal */
