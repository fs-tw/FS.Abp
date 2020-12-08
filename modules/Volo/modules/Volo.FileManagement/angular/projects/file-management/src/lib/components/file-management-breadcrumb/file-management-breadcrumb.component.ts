import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { trackBy } from '@abp/ng.core';
import { FolderInfo } from '../../models/common-types';

@Component({
  selector: 'abp-file-management-breadcrumb',
  templateUrl: './file-management-breadcrumb.component.html',
  styleUrls: ['./file-management-breadcrumb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagementBreadcrumbComponent {
  @Input() rootBreadcrumbName = 'FileManagement::AllFiles';
  @Input() navigatedFolders: FolderInfo[];
  @Output() breadcrumbClick = new EventEmitter<FolderInfo>();

  trackById = trackBy<FolderInfo>('id');

  onClick(item: FolderInfo) {
    this.breadcrumbClick.emit(item);
  }
}
