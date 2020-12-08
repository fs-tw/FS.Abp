import { Injectable, OnDestroy } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { FolderInfo } from '../models/common-types';
import {
  DirectoryTreeService,
  mapRootIdToEmpty,
  ROOT_NODE,
} from './directory-tree.service';
import { UpdateStreamService } from './update-stream.service';
import { Subscription } from 'rxjs';

@Injectable()
export class NavigatorService implements OnDestroy {
  private navigatedFolders: FolderInfo[] = [ROOT_NODE];
  private store = new InternalStore<FolderInfo[]>(this.navigatedFolders);
  navigatedFolderPath$ = this.store.sliceState((state) => state);

  subscription: Subscription;

  constructor(
    private directory: DirectoryTreeService,
    private updateStream: UpdateStreamService
  ) {
    this.setUpDirectoryUpdate();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goToFolder(folder: FolderInfo) {
    this.updateCurrentFolderPath(folder);
  }

  goToRoot() {
    this.goToFolder(null);
  }

  goUpFolder() {
    if (this.navigatedFolders.length === 0) {
      // already at the root, do nothing.
      return;
    } else if (this.navigatedFolders.length === 1) {
      this.goToRoot();
    } else {
      const folder = this.navigatedFolders[this.navigatedFolders.length - 2];
      this.goToFolder(folder);
    }
  }

  getCurrentFolder() {
    return (
      this.navigatedFolders.length &&
      this.navigatedFolders[this.navigatedFolders.length - 1]
    );
  }

  getCurrentFolderId() {
    return mapRootIdToEmpty(this.getCurrentFolder()?.id);
  }

  private updateCurrentFolderPath(folder: FolderInfo) {
    this.next([...this.directory.findFullPathOf(folder)]);
  }

  private next(newValue: FolderInfo[]) {
    this.navigatedFolders = newValue;
    this.store.patch(this.navigatedFolders);

    this.updateStream.updateContentAndDirectory();
  }

  private setUpDirectoryUpdate() {
    this.subscription = this.updateStream.directoryUpdate$.subscribe((_) => {
      this.directory.updateDirectories(this.getCurrentFolderId());
    });
  }
}
