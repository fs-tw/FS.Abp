import type { ConsultationRecordCreateDto, ConsultationRecordGetListDto, ConsultationRecordPrimaryKeyDto, ConsultationRecordUpdateDto, ConsultationRecordWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
export declare class ConsultationRecordsApiService {
    private restService;
    apiName: string;
    createByConsultationRecordCreate: (ConsultationRecordCreate: ConsultationRecordCreateDto) => import("rxjs").Observable<ConsultationRecordWithDetailsDto>;
    deleteByConsultationRecordPrimaryKey: (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto) => import("rxjs").Observable<void>;
    getByConsultationRecordPrimaryKey: (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto) => import("rxjs").Observable<ConsultationRecordWithDetailsDto>;
    getListByConsultationRecordGetList: (ConsultationRecordGetList: ConsultationRecordGetListDto) => import("rxjs").Observable<PagedResultDto<ConsultationRecordWithDetailsDto>>;
    updateByConsultationRecordPrimaryKeyAndConsultationRecordUpdate: (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto, ConsultationRecordUpdate: ConsultationRecordUpdateDto) => import("rxjs").Observable<ConsultationRecordWithDetailsDto>;
    constructor(restService: RestService);
}
