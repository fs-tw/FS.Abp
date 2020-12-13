import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { NavigatorService } from '../../services/navigator.service';

@Component({
  selector: 'abp-file-management-folder-filter',
  templateUrl: './file-management-folder-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagementFolderFilterComponent implements OnInit {
  constructor(
    public readonly list: ListService,
    private navigator: NavigatorService
  ) {}

  ngOnInit(): void {}

  goUpFolder() {
    this.navigator.goUpFolder();
  }

  search() {
    this.list.get();
  }
}
