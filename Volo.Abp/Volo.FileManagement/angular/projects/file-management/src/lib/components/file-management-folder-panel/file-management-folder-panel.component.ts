import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ListService } from '@abp/ng.core';
import { NavigatorService } from '../../services/navigator.service';
import { DirectoryContentDto } from '../../proxy/directories/models';

@Component({
  selector: 'abp-file-management-folder-panel',
  templateUrl: './file-management-folder-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListService],
})
export class FileManagementFolderPanelComponent {
  @Output() contentUpdate = new EventEmitter<DirectoryContentDto[]>();

  constructor(public navigator: NavigatorService) {}
}
