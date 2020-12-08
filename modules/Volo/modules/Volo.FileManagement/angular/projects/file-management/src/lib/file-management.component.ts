import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { UpdateStreamService } from './services/update-stream.service';
import { DeleteService } from './services/delete.service';
import { DownloadService } from './services/download.service';
import { DirectoryTreeService } from './services/directory-tree.service';
import { NavigatorService } from './services/navigator.service';
import { MoveService } from './services/move.service';
import { UploadService } from './services/upload.service';
import { eFileManagementComponents } from './enums';
import { DirectoryContentDto } from './proxy/directories';

@Component({
  selector: 'abp-file-management',
  templateUrl: './file-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DeleteService,
    DownloadService,
    DirectoryTreeService,
    NavigatorService,
    MoveService,
    UploadService,
    UpdateStreamService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eFileManagementComponents.FolderContent,
    },
  ],
})
export class FileManagementComponent implements OnInit {
  currentContent: DirectoryContentDto[] = [];

  constructor(private updateStream: UpdateStreamService) {}

  ngOnInit(): void {
    this.updateStream.updateContentAndDirectory();
  }
}
