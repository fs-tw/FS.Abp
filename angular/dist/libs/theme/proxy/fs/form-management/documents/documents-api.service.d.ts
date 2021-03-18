import type { DocumentDefinitionGetListDto, DocumentDefinitionWithDetailsDto, MetaData, VersionGetListDto, VersionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class DocumentsApiService {
    private restService;
    apiName: string;
    getListByDocumentDefinitionGetList: (DocumentDefinitionGetList: DocumentDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<DocumentDefinitionWithDetailsDto>>;
    getListByVersionGetList: (VersionGetList: VersionGetListDto) => import("rxjs").Observable<PagedResultDto<VersionWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
