import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { tap } from 'rxjs/operators';
import { FolderInfo } from '../../models/common-types';
import {
  ROOT_NODE,
  mapRootIdToEmpty,
} from '../../services/directory-tree.service';
import {
  DirectoryDescriptorInfoDto,
  DirectoryContentDto,
} from '../../proxy/directories/models';
import { DirectoryDescriptorService } from '../../proxy/directories/directory-descriptor.service';
import { FileDescriptorService } from '../../proxy/files/file-descriptor.service';
import { UpdateStreamService } from '../../services/update-stream.service';

@Injectable()
export class MoveFileModalService {
  private directoryContentStore = new InternalStore(
    [] as DirectoryDescriptorInfoDto[]
  );
  directoryContent$ = this.directoryContentStore.sliceState((state) => state);

  private breadcrumbStore = new InternalStore([ROOT_NODE] as FolderInfo[]);
  breadcrumbs$ = this.breadcrumbStore.sliceState((state) => state);

  constructor(
    private service: DirectoryDescriptorService,
    private fileService: FileDescriptorService,
    private updateStream: UpdateStreamService,
    private toaster: ToasterService
  ) {}

  reset() {
    this.breadcrumbStore.reset();
    this.directoryContentStore.reset();
    this.updateContent().subscribe();
  }

  updateContent() {
    return this.service
      .getList(this.getCurrentFolderIdForRequest())
      .pipe(tap((content) => this.directoryContentStore.patch(content.items)));
  }

  goTo(folder: FolderInfo) {
    let navigatedFolders = this.getNavigatedFolders();
    const index = navigatedFolders.findIndex((f) => f.id === folder.id);
    if (index < 0) {
      navigatedFolders = [...navigatedFolders, folder];
    } else {
      navigatedFolders = navigatedFolders.slice(0, index + 1);
    }
    this.breadcrumbStore.patch(navigatedFolders);
    this.updateContent().subscribe();
  }

  move(fileToMove: DirectoryContentDto) {
    return this.fileService
      .move({
        id: fileToMove.id,
        newDirectoryId: this.getCurrentFolderIdForRequest(),
      })
      .pipe(
        tap((_) => {
          this.updateStream.updateContent();
          this.toaster.success('FileManagement::SuccessfullyMoved');
        })
      );
  }

  private getCurrentFolderIdForRequest() {
    const navigatedFolders = this.getNavigatedFolders();
    return mapRootIdToEmpty(navigatedFolders[navigatedFolders.length - 1]?.id);
  }

  private getNavigatedFolders(): FolderInfo[] {
    return this.breadcrumbStore.state;
  }
}
