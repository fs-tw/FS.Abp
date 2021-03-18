import type { BannerDefinitionGetListDto, BannerDefinitionWithDetailsDto, BannerGetListDto, BannerWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class BannersApiService {
    private restService;
    apiName: string;
    getListByBannerDefinitionGetList: (BannerDefinitionGetList: BannerDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<BannerDefinitionWithDetailsDto>>;
    getListByBannerGetList: (BannerGetList: BannerGetListDto) => import("rxjs").Observable<PagedResultDto<BannerWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
