import type { ConsultationRecordCreateDto, ConsultationRecordGetListDto, ConsultationRecordPrimaryKeyDto, ConsultationRecordUpdateDto, ConsultationRecordWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsultationRecordsApiService {
  apiName = 'Default';

  createByConsultationRecordCreate = (ConsultationRecordCreate: ConsultationRecordCreateDto) =>
    this.restService.request<any, ConsultationRecordWithDetailsDto>({
      method: 'POST',
      url: `/api/crm/consultationrecords/consultation-record`,
      body: ConsultationRecordCreate,
    },
    { apiName: this.apiName });

  deleteByConsultationRecordPrimaryKey = (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/crm/consultationrecords/consultation-record/id`,
      params: { id: ConsultationRecordPrimaryKey.id },
    },
    { apiName: this.apiName });

  getByConsultationRecordPrimaryKey = (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto) =>
    this.restService.request<any, ConsultationRecordWithDetailsDto>({
      method: 'GET',
      url: `/api/crm/consultationrecords/consultation-record/id`,
      params: { id: ConsultationRecordPrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByConsultationRecordGetList = (ConsultationRecordGetList: ConsultationRecordGetListDto) =>
    this.restService.request<any, PagedResultDto<ConsultationRecordWithDetailsDto>>({
      method: 'GET',
      url: `/api/crm/consultationrecords/consultation-record`,
      params: { fields: ConsultationRecordGetList.fields, value: ConsultationRecordGetList.value, sorting: ConsultationRecordGetList.sorting, skipCount: ConsultationRecordGetList.skipCount, maxResultCount: ConsultationRecordGetList.maxResultCount },
    },
    { apiName: this.apiName });

  updateByConsultationRecordPrimaryKeyAndConsultationRecordUpdate = (ConsultationRecordPrimaryKey: ConsultationRecordPrimaryKeyDto, ConsultationRecordUpdate: ConsultationRecordUpdateDto) =>
    this.restService.request<any, ConsultationRecordWithDetailsDto>({
      method: 'PUT',
      url: `/api/crm/consultationrecords/consultation-record/id`,
      params: { id: ConsultationRecordPrimaryKey.id },
      body: ConsultationRecordUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
