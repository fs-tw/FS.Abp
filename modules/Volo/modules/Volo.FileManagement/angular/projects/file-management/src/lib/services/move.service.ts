import { Injectable } from '@angular/core';
import { filter, tap, switchMap } from 'rxjs/operators';
import {
  ConfirmationService,
  Confirmation,
  ToasterService,
} from '@abp/ng.theme.shared';
import { DirectoryDescriptorService } from '../proxy/directories/directory-descriptor.service';
import { FolderInfo } from '../models/common-types';
import {
  DirectoryTreeService,
  mapRootIdToEmpty,
} from './directory-tree.service';
import { UpdateStreamService } from './update-stream.service';

@Injectable()
export class MoveService {
  constructor(
    private service: DirectoryDescriptorService,
    private confirmation: ConfirmationService,
    private updateStream: UpdateStreamService,
    private directoryService: DirectoryTreeService,
    private toaster: ToasterService
  ) {}

  moveTo(source: FolderInfo, target: FolderInfo) {
    const id = source.id;
    const newParentId = mapRootIdToEmpty(target.id);
    return this.confirmation
      .warn(
        'FileManagement::DirectoryMoveConfirmMessage',
        'FileManagement::AreYouSure',
        { messageLocalizationParams: [source.name, target.name] }
      )
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.service.move({ id, newParentId })),
        tap((_) => {
          this.updateStream.updateContent();
          this.directoryService.move(source, target);
          this.toaster.success('FileManagement::SuccessfullyMoved');
        })
      );
  }
}
