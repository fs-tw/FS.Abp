import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '@abp/ng.core';
import * as _ from 'lodash';

import { Volo } from '@fs-tw/proxy/cms-kit';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    constructor(
        private restService: RestService
    ) { }

    uploadFile(file: File, entityType: string): Observable<Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto> {
        let formdata = new FormData();
        formdata.append('inputStream.name', file.name);
        formdata.append('inputStream.file', file as any, file.name);

        return this.restService.request<
            any,
            Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto
        >(
            {
                method: 'POST',
                url: `/api/cms-kit-admin/media/${entityType}`,
                body: formdata,
            },
            { apiName: 'CmsKitAdmin' }
        );
    }
}