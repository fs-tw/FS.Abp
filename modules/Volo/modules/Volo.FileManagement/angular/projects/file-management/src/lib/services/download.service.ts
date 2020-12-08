import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { downloadBlob, RestService } from '@abp/ng.core';
import { FileInfo } from '../models/common-types';

@Injectable()
export class DownloadService {
  apiName = 'FileManagement';

  constructor(private restService: RestService) {}

  downloadFile(file: FileInfo) {
    return this.download(file.id).pipe(
      tap((result: any) => {
        downloadBlob(result, file.name);
      })
    );
  }

  download = (id: string) =>
    this.restService.request<any, any>(
      {
        method: 'GET',
        url: `/api/file-management/file-descriptor/download/${id}`,
        responseType: 'blob',
      } as any,
      { apiName: this.apiName }
    );
}
