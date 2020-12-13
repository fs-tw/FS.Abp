import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { eFileManagementPolicyNames } from '@volo/abp.ng.file-management/config';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'abp-file-management-buttons',
  templateUrl: './file-management-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    '../../../../../../node_modules/@uppy/core/dist/style.min.css',
    '../../../../../../node_modules/@uppy/dashboard/dist/style.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FileManagementButtonsComponent implements AfterViewInit {
  folderCreateModal = false;
  fileCreatePermission = eFileManagementPolicyNames.FileDescriptorCreate;
  directoryCreatePermission =
    eFileManagementPolicyNames.DirectoryDescriptorCreate;

  buttonId = 'upload-files-btn';

  constructor(private uploadService: UploadService) {}

  ngAfterViewInit(): void {
    // TODO: do not initialize service and load uppy.io if the user does not have the required permission
    this.uploadService.initUppy({ trigger: `#${this.buttonId}` });
  }
}
