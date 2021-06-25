import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { LocalizationService } from '@abp/ng.core';
import {
  ToasterService,
  ConfirmationService,
  Confirmation,
} from '@abp/ng.theme.shared';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { saveAs } from 'file-saver';
import * as _ from 'lodash';

import { MediaDescriptorDto } from '../models/models';
import { MediaDescriptorService } from '../services/media-descriptor.service';

@Component({
  selector: 'fs-tw-pick-files',
  templateUrl: './pick-files.component.html',
  styleUrls: ['./pick-files.component.css'],
})
export class PickFilesComponent implements OnInit, OnChanges {
  @Input()
  entityType: string = 'blogpost';

  @Input()
  attachmentMedias: MediaDescriptorDto[] = [];

  @Output()
  attachmentMediasChange = new EventEmitter<MediaDescriptorDto[]>();

  files: MediaDescriptorDto[] = [];

  constructor(
    private mediaDescriptorService: MediaDescriptorService,
    private toasterService: ToasterService,
    private localizationService: LocalizationService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.files = _.cloneDeep(this.attachmentMedias);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    let hasData = this.files.findIndex((x) => x.name == file.name) > -1;
    if (hasData) {
      this.toasterService.error(
        this.localizationService.instant(
          'CmsKitManagement::PickFiles:ImageRepeat',
          file.name
        )
      );
      return false;
    }

    this.files.push({
      id: file.uid,
      mimeType: file.type,
      name: file.name,
      size: file.size,
    });
    this.uploadFile(file);

    return false;
  };

  download(item: MediaDescriptorDto) {
    this.mediaDescriptorService.download(item).subscribe((x) => {
      saveAs(new Blob([x], { type: item.mimeType }), item.name);
    });
  }

  uploadFile(file: NzUploadFile) {
    this.mediaDescriptorService
      .uploadFile(this.entityType, file)
      .subscribe((x) => {
        let i = this.files.findIndex((y) => y.name == x.name);
        this.files[i] = x;
        this.attachmentMediasChange.emit(this.files);
      });
  }

  deleteFile(item: MediaDescriptorDto) {
    this.confirmationService
      .warn(
        this.localizationService.instant(
          'CmsKitManagement::PickFiles:AreYouSureToDeleteFile',
          item.name
        ),
        'CmsKitManagement::Warn'
      )
      .subscribe((x) => {
        if (x != Confirmation.Status.confirm) return;

        this.files = this.files.filter((y) => item.id != y.id);
        this.attachmentMediasChange.emit(this.files);
      });
  }
}
