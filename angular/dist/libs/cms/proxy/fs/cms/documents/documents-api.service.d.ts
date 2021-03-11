import type { DocumentDefinitionGetListDto, DocumentDefinitionWithDetailsDto, DocumentGetListDto, DocumentWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class DocumentsApiService {
    private restService;
    apiName: string;
    getListByDocumentDefinitionGetList: (DocumentDefinitionGetList: DocumentDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<DocumentDefinitionWithDetailsDto>>;
    getListByDocumentGetList: (DocumentGetList: DocumentGetListDto) => import("rxjs").Observable<PagedResultDto<DocumentWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
