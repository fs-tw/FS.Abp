import type { DocumentDefinitionGetListDto, DocumentDefinitionWithDetailsDto, MetaData, VersionGetListDto, VersionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class DocumentsApiService {
    private restService;
    apiName: string;
    getListByDocumentDefinitionGetList: (DocumentDefinitionGetList: DocumentDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<DocumentDefinitionWithDetailsDto>>;
    getListByVersionGetList: (VersionGetList: VersionGetListDto) => import("rxjs").Observable<PagedResultDto<VersionWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<DocumentsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DocumentsApiService>;
}
//# sourceMappingURL=documents-api.service.d.ts.map