import type { MetaData, WebSiteDefinitionGetListDto, WebSiteDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class WebSitesApiService {
    private restService;
    apiName: string;
    getListByWebSiteDefinitionGetList: (WebSiteDefinitionGetList: WebSiteDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<WebSiteDefinitionWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
