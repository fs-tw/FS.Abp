import { RestService } from '@abp/ng.core';
import type { IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
export declare class FilesApiService {
    private restService;
    apiName: string;
    getContentById: (id: string) => import("rxjs").Observable<IActionResult>;
    constructor(restService: RestService);
}
