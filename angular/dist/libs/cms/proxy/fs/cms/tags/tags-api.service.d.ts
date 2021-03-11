import type { MetaData, TagCreateDto, TagGetListDto, TagPrimaryKeyDto, TagUpdateDto, TagWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class TagsApiService {
    private restService;
    apiName: string;
    createByTagCreate: (TagCreate: TagCreateDto) => import("rxjs").Observable<TagWithDetailsDto>;
    deleteByTagPrimaryKey: (TagPrimaryKey: TagPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByTagPrimaryKey: (TagPrimaryKey: TagPrimaryKeyDto) => import("rxjs").Observable<TagWithDetailsDto>;
    getListByTagGetList: (TagGetList: TagGetListDto) => import("rxjs").Observable<PagedResultDto<TagWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    updateByTagPrimaryKeyAndTagUpdate: (TagPrimaryKey: TagPrimaryKeyDto, TagUpdate: TagUpdateDto) => import("rxjs").Observable<TagWithDetailsDto>;
    constructor(restService: RestService);
}
