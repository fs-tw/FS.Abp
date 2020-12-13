import { Injectable } from '@angular/core';
import { tap, switchMap, filter } from 'rxjs/operators';
import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import { DirectoryDescriptorService } from '../proxy/directories/directory-descriptor.service';
import { FileDescriptorService } from '../proxy/files/file-descriptor.service';
import { DirectoryContentDto } from '../proxy/directories/models';
import { UpdateStreamService } from './update-stream.service';

@Injectable()
export class DeleteService {
  constructor(
    private confirmationService: ConfirmationService,
    private directoryService: DirectoryDescriptorService,
    private fileService: FileDescriptorService,
    private updateStream: UpdateStreamService,
    private toaster: ToasterService
  ) {}

  deleteFolder(content: DirectoryContentDto) {
    return this.delete(
      'FileManagement::DirectoryDeleteConfirmationMessage',
      content,
      this.directoryService
    );
  }

  deleteFile(content: DirectoryContentDto) {
    return this.delete(
      'FileManagement::FileDeleteConfirmationMessage',
      content,
      this.fileService
    );
  }

  private delete(
    message: string,
    content: DirectoryContentDto,
    service: DirectoryDescriptorService | FileDescriptorService
  ) {
    return this.confirmationService
      .warn(message, 'FileManagement::AreYouSure')
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => service.delete(content.id)),
        tap((_) => {
          this.updateStream.updateContentAndDirectory();
          this.toaster.warn('FileManagement::SuccessfullyDeleted');
        })
      );
  }
}
