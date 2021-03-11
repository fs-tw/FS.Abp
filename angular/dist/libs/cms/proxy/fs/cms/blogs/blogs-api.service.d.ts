import type { BlogCreateDto, BlogGetListDto, BlogPrimaryKeyDto, BlogUpdateDto, BlogWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class BlogsApiService {
    private restService;
    apiName: string;
    createByBlogCreate: (BlogCreate: BlogCreateDto) => import("rxjs").Observable<BlogWithDetailsDto>;
    deleteByBlogPrimaryKey: (BlogPrimaryKey: BlogPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByBlogPrimaryKey: (BlogPrimaryKey: BlogPrimaryKeyDto) => import("rxjs").Observable<BlogWithDetailsDto>;
    getListByBlogGetList: (BlogGetList: BlogGetListDto) => import("rxjs").Observable<PagedResultDto<BlogWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    updateByBlogPrimaryKeyAndBlogUpdate: (BlogPrimaryKey: BlogPrimaryKeyDto, BlogUpdate: BlogUpdateDto) => import("rxjs").Observable<BlogWithDetailsDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<BlogsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<BlogsApiService>;
}
//# sourceMappingURL=blogs-api.service.d.ts.map