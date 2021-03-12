import type { MetaData, TagCreateDto, TagGetListDto, TagPrimaryKeyDto, TagUpdateDto, TagWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<TagsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TagsApiService>;
}
//# sourceMappingURL=tags-api.service.d.ts.map