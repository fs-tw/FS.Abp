import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DirectoryDescriptorService } from '../../proxy/directories/directory-descriptor.service';
import { NavigatorService } from '../../services/navigator.service';
import { UpdateStreamService } from '../../services/update-stream.service';

@Injectable()
export class CreateFolderModalService {
  constructor(
    private service: DirectoryDescriptorService,
    private navigator: NavigatorService,
    private updateStream: UpdateStreamService
  ) {}

  create(name: string) {
    const parentId = this.navigator.getCurrentFolderId();
    return this.service
      .create({ name, parentId })
      .pipe(tap(this.updateStream.updateContentAndDirectory));
  }
}
