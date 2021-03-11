import type { GetPostByBlogIdInput, MetaData, PostCreateDto, PostGetListDto, PostPrimaryKeyDto, PostTagMapGetListDto, PostTagMapWithDetailsDto, PostUpdateDto, PostWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class PostsApiService {
    private restService;
    apiName: string;
    createByPostCreate: (PostCreate: PostCreateDto) => import("rxjs").Observable<PostWithDetailsDto>;
    deleteByPostPrimaryKey: (PostPrimaryKey: PostPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByPostPrimaryKey: (PostPrimaryKey: PostPrimaryKeyDto) => import("rxjs").Observable<PostWithDetailsDto>;
    getListByPostGetList: (PostGetList: PostGetListDto) => import("rxjs").Observable<PagedResultDto<PostWithDetailsDto>>;
    getListByPostTagMapGetList: (PostTagMapGetList: PostTagMapGetListDto) => import("rxjs").Observable<PagedResultDto<PostTagMapWithDetailsDto>>;
    getPostsByBlogIdByInput: (input: GetPostByBlogIdInput) => import("rxjs").Observable<PagedResultDto<PostWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    updateByPostPrimaryKeyAndPostUpdate: (PostPrimaryKey: PostPrimaryKeyDto, PostUpdate: PostUpdateDto) => import("rxjs").Observable<PostWithDetailsDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<PostsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PostsApiService>;
}
//# sourceMappingURL=posts-api.service.d.ts.map