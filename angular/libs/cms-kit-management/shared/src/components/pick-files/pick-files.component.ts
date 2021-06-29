import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { RestService, LocalizationService } from '@abp/ng.core';
import { ToasterService, ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';

import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-tw-pick-files',
  templateUrl: './pick-files.component.html',
  styleUrls: ['./pick-files.component.css']
})
export class PickFilesComponent implements OnInit, OnChanges {

  @Input()
  entityType: string = 'blogpost'

  @Input()
  attachmentMedias: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto[] = [];

  @Output()
  attachmentMediasChange = new EventEmitter<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto[]>();

  files: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto[] = [];

  constructor(
    private restService: RestService,
    private toasterService: ToasterService,
    private localizationService: LocalizationService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.files = _.cloneDeep(this.attachmentMedias);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let hasData = this.files.findIndex(x => x.name == file.name) > -1;
    if (hasData) {
      this.toasterService.error(this.localizationService.instant("CmsKitManagement::PickFiles:ImageRepeat", file.name))
      return false;
    }

    this.files.push({
      id: file.uid,
      mimeType: file.type,
      name: file.name,
      size: file.size
    });
    this.uploadFile(file);

    return false;
  };

  download(item: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto) {
    this.restService.request<any, any>({
        method: 'GET',
        url: `/api/cms-kit/media/${item.id}`,
        responseType: 'blob'
      }, { apiName: "CmsKitAdmin" })
      .subscribe((x) => {
        saveAs(new Blob([x], { type: item.mimeType }), item.name);
      })
  }

  uploadFile(file: NzUploadFile) {
    let formdata = new FormData();
    formdata.append('inputStream.name', file.name);
    formdata.append('inputStream.file', file as any, file.name);
    
    this.restService.request<any, Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto>({
        method: 'POST',
        url: `/api/cms-kit-admin/media/${this.entityType}`,
        body: formdata,
      }, { apiName: 'CmsKitAdmin' })
      .subscribe((x) => {
        let i = this.files.findIndex(y => y.name == x.name);
        this.files[i] = x;
        this.attachmentMediasChange.emit(this.files)
      });
  }

  deleteFile(item: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto) {
    this.confirmationService.warn(this.localizationService.instant("CmsKitManagement::PickFiles:AreYouSureToDeleteFile", item.name), "CmsKitManagement::Warn")
      .subscribe((x) => {
        if (x != Confirmation.Status.confirm) return;

        this.files = this.files.filter(y => item.id != y.id);
        this.attachmentMediasChange.emit(this.files);
      })
  }
}
