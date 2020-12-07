import { Injectable } from '@angular/core';
import { mapTo, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DirectoryDescriptorService } from '../../proxy/directories/directory-descriptor.service';
import { FileDescriptorService } from '../../proxy/files/file-descriptor.service';
import { DirectoryContentDto } from '../../proxy/directories/models';
import { UpdateStreamService } from '../../services/update-stream.service';

@Injectable()
export class RenameModalService {
  constructor(
    private directoryService: DirectoryDescriptorService,
    private fileService: FileDescriptorService,
    private updateStream: UpdateStreamService
  ) {}

  rename(contentToRename: DirectoryContentDto) {
    if (contentToRename.isDirectory) {
      return this.callService(this.directoryService, contentToRename);
    } else {
      return this.callService(this.fileService, contentToRename);
    }
  }

  private callService(
    service: FileDescriptorService | DirectoryDescriptorService,
    contentToRename: DirectoryContentDto
  ) {
    const id = contentToRename.id;
    const name = contentToRename.name;
    return (service.rename(id, { name }) as Observable<any>).pipe(
      tap(this.updateStream.updateContentAndDirectory),
      mapTo(true)
    );
  }
}
