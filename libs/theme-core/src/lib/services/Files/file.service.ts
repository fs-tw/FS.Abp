import { ConfigStateService,EnvironmentService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FilePutDto, FileService as proxyFileService } from '@fs-tw/theme-core/proxy'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileService {
  apiName = 'Default';

  constructor(
    private environmentService: EnvironmentService,
    private configStateService: ConfigStateService,
    private proxyFileService: proxyFileService,
  ) { }

  uploadFileByNameAndBase64(name: string, body: FilePutDto): Observable<void> {
    name = _.join(_.split(name, '%5C'), '\\');
    return this.proxyFileService.putByNameAndBase64(name, body);
  }

  uploadFileByFormData(body: FormData): Observable<void> {
    return this.proxyFileService.put(body);
  }

  deleteFileByName(name: string): Observable<void> {
    name = _.join(_.split(name, '\\'), '%5C');
    return this.proxyFileService.delete(name);
  }


  getFileByName(name: string): string {
    let url = _.join(_.split(name, '\\'), '%5C');
    return this.environmentService.getApiUrl() + `/api/theme-core/file/${url}`;
  }

  getFileName(url: string) {
    let splitStr = url.split("\\");
    return splitStr[splitStr.length - 1];
  }

}
