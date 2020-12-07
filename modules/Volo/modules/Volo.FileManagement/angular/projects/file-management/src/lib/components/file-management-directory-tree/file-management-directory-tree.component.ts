import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';
import { DirectoryTreeService } from '../../services/directory-tree.service';
import { NavigatorService } from '../../services/navigator.service';
import { MoveService } from '../../services/move.service';

@Component({
  selector: 'abp-file-management-directory-tree',
  templateUrl: './file-management-directory-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagementDirectoryTreeComponent implements OnInit, OnDestroy {
  directories;

  subscription: Subscription;

  updateDirectories = (directories) => {
    this.directories = directories;
    this.cdr.markForCheck();
  };

  constructor(
    public service: DirectoryTreeService,
    private navigator: NavigatorService,
    private move: MoveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.service.directoryTree$.subscribe(
      this.updateDirectories
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onDrop({ dragNode, node }: { dragNode: NzTreeNode; node: NzTreeNode }) {
    this.move
      .moveTo(this.nzNodeToFolderInfo(dragNode), this.nzNodeToFolderInfo(node))
      .subscribe();
  }

  onNodeClick(node) {
    if (node.isRoot) {
      this.onRootClick();
    } else {
      this.navigator.goToFolder(node);
    }
  }

  onRootClick() {
    this.navigator.goToRoot();
  }

  private nzNodeToFolderInfo(node: NzTreeNode) {
    return { id: node.origin.id, name: node.origin.title };
  }
}
