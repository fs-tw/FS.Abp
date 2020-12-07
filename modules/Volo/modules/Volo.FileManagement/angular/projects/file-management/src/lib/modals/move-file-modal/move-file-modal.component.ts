import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ListService } from '@abp/ng.core';
import { BaseModalComponent } from '../base-modal.component';
import { MoveFileModalService } from './move-file-modal.service';
import { DirectoryContentDto } from '../../proxy/directories/models';
import { FolderInfo } from '../../models/common-types';

@Component({
  selector: 'abp-move-file-modal',
  templateUrl: './move-file-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MoveFileModalService, ListService],
})
export class MoveFileModalComponent
  extends BaseModalComponent
  implements OnChanges {
  @Input() fileToMove: DirectoryContentDto;

  constructor(public readonly service: MoveFileModalService) {
    super();
  }

  ngOnChanges({ visible }: SimpleChanges) {
    if (visible.currentValue) {
      this.service.reset();
    }
  }

  onBreadcrumbClick(folder: FolderInfo) {
    this.service.goTo(folder);
  }

  saveAction() {
    return this.service.move(this.fileToMove);
  }
}
