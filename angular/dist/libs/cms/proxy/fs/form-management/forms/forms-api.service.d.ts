import type { FormalGetListDto, FormalWithDetailsDto, GroupGetListDto, GroupWithDetailsDto, ItemGetListDto, ItemWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class FormsApiService {
    private restService;
    apiName: string;
    getListByFormalGetList: (FormalGetList: FormalGetListDto) => import("rxjs").Observable<PagedResultDto<FormalWithDetailsDto>>;
    getListByGroupGetList: (GroupGetList: GroupGetListDto) => import("rxjs").Observable<PagedResultDto<GroupWithDetailsDto>>;
    getListByItemGetList: (ItemGetList: ItemGetListDto) => import("rxjs").Observable<PagedResultDto<ItemWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
