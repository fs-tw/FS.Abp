import type { MetaData, RecordGetListDto, RecordItemGetListDto, RecordItemWithDetailsDto, RecordWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class RecordsApiService {
    private restService;
    apiName: string;
    getListByRecordGetList: (RecordGetList: RecordGetListDto) => import("rxjs").Observable<PagedResultDto<RecordWithDetailsDto>>;
    getListByRecordItemGetList: (RecordItemGetList: RecordItemGetListDto) => import("rxjs").Observable<PagedResultDto<RecordItemWithDetailsDto>>;
    options: () => import("rxjs").Observable<MetaData>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<RecordsApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RecordsApiService>;
}
//# sourceMappingURL=records-api.service.d.ts.map