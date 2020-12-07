import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TreeAdapter, BaseNode } from '@abp/ng.components/tree';
import { TreeNode } from '@abp/ng.core';
import { InternalStore } from '@abp/ng.core';
import { FolderInfo } from '../models/common-types';
import { DirectoryDescriptorInfoDto } from '../proxy/directories/models';
import { DirectoryDescriptorService } from '../proxy/directories/directory-descriptor.service';

export type TreeType = BaseNode & DirectoryDescriptorInfoDto;
export const ROOT_ID = 'ROOT_ID';
export const ROOT_NODE = {
  id: ROOT_ID,
  parentId: null,
  name: 'All Files',
  isRoot: true,
  hasChildren: true,
} as any;

export function mapRootIdToEmpty(id: string) {
  return id === ROOT_ID ? null : id;
}

@Injectable()
export class DirectoryTreeService {
  private treeHolder: TreeAdapter<TreeType>;

  private store = new InternalStore<TreeNode<TreeType>[]>([]);
  directoryTree$ = this.store.sliceState((state) => state);

  extendedKeys = [];

  constructor(private directoryService: DirectoryDescriptorService) {}

  updateDirectories(currentFolderId: string = null) {
    this.collapseFolder(currentFolderId);
    this.fetchDirectories(mapRootIdToEmpty(currentFolderId)).subscribe(
      (items) => {
        this.updateTree(currentFolderId, items);
      }
    );
  }

  findFullPathOf(folder: FolderInfo): FolderInfo[] {
    let currentId = folder?.id;
    const fullList = this.treeHolder.getList();
    const retVal = [];

    while (currentId) {
      const node = fullList.find((i) => i.id === currentId);
      if (node && node.id !== ROOT_ID) {
        retVal.push(node);
      }
      currentId = node?.parentId;
    }

    return retVal
      .concat(ROOT_NODE)
      .map((item) => ({ id: item.id, name: item.name }))
      .reverse();
  }

  collapseFolder(id: string) {
    const index = this.extendedKeys.indexOf(id);
    if (index > -1) {
      this.extendedKeys.splice(index, 1);
    }
  }

  move(source: FolderInfo, target: FolderInfo) {
    this.treeHolder.handleDrop({
      key: source.id,
      parentNode: { key: target.id },
    } as any);
    this.extendedKeys = [...this.extendedKeys, target.id];
    this.updateStore();
  }

  private updateTree(
    currentFolderId: string,
    items: DirectoryDescriptorInfoDto[]
  ) {
    if (items) {
      if (this.treeHolder && currentFolderId) {
        this.onTreeExistAndNavigatedToNode(
          currentFolderId,
          items as TreeType[]
        );
      } else {
        this.onTreeNotExistOrNavigatedToRoot(items as TreeType[]);
      }
      this.updateStore();
    }
  }

  private updateStore() {
    this.store.patch(this.treeHolder.getTree() as any);
  }

  private onTreeExistAndNavigatedToNode(parentId: string, list: TreeType[]) {
    this.extendedKeys = [...this.extendedKeys, parentId];
    this.treeHolder.handleUpdate({ key: parentId, children: list });
  }

  private onTreeNotExistOrNavigatedToRoot(result: TreeType[]) {
    this.extendedKeys = [ROOT_ID];
    this.treeHolder = new TreeAdapter([ROOT_NODE, ...result]);
  }

  private fetchDirectories(id: string) {
    return this.directoryService
      .getList(id)
      .pipe(map((result) => this.bindInitialListToRoot(result.items)));
  }

  private bindInitialListToRoot(list: DirectoryDescriptorInfoDto[]) {
    return list.map((l) => ({ ...l, parentId: l.parentId || ROOT_ID }));
  }
}
