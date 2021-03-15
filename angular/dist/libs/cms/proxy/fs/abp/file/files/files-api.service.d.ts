import { RestService } from '@abp/ng.core';
export declare class FilesApiService {
    private restService;
    apiName: string;
    getContentById: (id: string) => import("rxjs").Observable<any>;
    constructor(restService: RestService);
}
