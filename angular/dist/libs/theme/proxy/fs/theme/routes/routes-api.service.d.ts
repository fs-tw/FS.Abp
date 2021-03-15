import type { MetaData, RouteDefinitionGetListDto, RouteDefinitionWithDetailsDto, RouteGetListDto, RouteWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class RoutesApiService {
    private restService;
    apiName: string;
    getListByRouteDefinitionGetList: (RouteDefinitionGetList: RouteDefinitionGetListDto) => import("rxjs").Observable<PagedResultDto<RouteDefinitionWithDetailsDto>>;
    getListByRouteGetList: (RouteGetList: RouteGetListDto) => import("rxjs").Observable<PagedResultDto<RouteWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
}
