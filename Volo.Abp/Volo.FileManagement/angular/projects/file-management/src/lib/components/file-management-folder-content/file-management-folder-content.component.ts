import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import type {
  DirectoryContentDto,
  DirectoryContentRequestInput,
} from '../../proxy/directories/models';
import { eFileManagementComponents } from '../../enums/components';
import { DeleteService } from '../../services/delete.service';
import { DownloadService } from '../../services/download.service';
import { NavigatorService } from '../../services/navigator.service';
import { DirectoryDescriptorService } from '../../proxy/directories/directory-descriptor.service';
import { UpdateStreamService } from '../../services/update-stream.service';

@Component({
  selector: 'abp-file-management-folder-content',
  templateUrl: './file-management-folder-content.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eFileManagementComponents.FolderContent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagementFolderContentComponent implements OnInit, OnDestroy {
  @Output() contentUpdate = new EventEmitter<DirectoryContentDto[]>();

  contentToRename: DirectoryContentDto;
  renameModalOpen = false;

  fileToMove: DirectoryContentDto;
  moveModalOpen = false;

  content$ = this.list
    .hookToQuery((query) =>
      this.service.getContent({
        ...query,
        id: this.navigator.getCurrentFolderId(),
      })
    )
    .pipe(
      map((result) => result.items),
      tap((items) => this.contentUpdate.emit(items))
    );

  subscription: Subscription;

  constructor(
    public readonly list: ListService<DirectoryContentRequestInput>,
    public readonly service: DirectoryDescriptorService,
    private deleteService: DeleteService,
    private downloadService: DownloadService,
    private navigator: NavigatorService,
    private updateStream: UpdateStreamService
  ) {
    this.list.maxResultCount = Infinity;
  }

  ngOnInit() {
    this.subscription = this.updateStream.contentUpdate$.subscribe(
      this.list.get
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openFolder(record: DirectoryContentDto) {
    this.navigator.goToFolder({ id: record.id, name: record.name });
  }

  renameFolder(record: DirectoryContentDto) {
    this.openRenameModal(record);
  }

  deleteFolder(record: DirectoryContentDto) {
    this.deleteService.deleteFolder(record).subscribe();
  }

  downloadFile(record: DirectoryContentDto) {
    this.downloadService.downloadFile(record).subscribe();
  }

  renameFile(record: DirectoryContentDto) {
    this.openRenameModal(record);
  }

  deleteFile(record: DirectoryContentDto) {
    this.deleteService.deleteFile(record).subscribe();
  }

  moveFile(record: DirectoryContentDto) {
    this.fileToMove = record;
    this.moveModalOpen = true;
  }

  onContentSaved() {
    delete this.contentToRename;
    delete this.fileToMove;
  }

  private openRenameModal(withContent: DirectoryContentDto) {
    this.renameModalOpen = true;
    this.contentToRename = withContent;
  }
}
