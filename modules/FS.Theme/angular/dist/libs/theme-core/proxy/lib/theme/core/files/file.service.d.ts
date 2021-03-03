import type { FilePutDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { IActionResult } from '../../../microsoft/asp-net-core/mvc/models';
export declare class FileService {
    private restService;
    apiName: string;
    delete: (name: string) => import("rxjs").Observable<void>;
    getBase64ByName: (name: string) => import("rxjs").Observable<string>;
    getByName: (name: string) => import("rxjs").Observable<IActionResult>;
    put: (body: FormData) => import("rxjs").Observable<void>;
    putByNameAndBase64: (name: string, base64: FilePutDto) => import("rxjs").Observable<void>;
    constructor(restService: RestService);
}
