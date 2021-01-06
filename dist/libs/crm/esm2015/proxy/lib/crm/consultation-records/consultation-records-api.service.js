import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ConsultationRecordsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByConsultationRecordCreate = (ConsultationRecordCreate) => this.restService.request({
            method: 'POST',
            url: `/api/crm/consultationrecords/consultation-record`,
            body: ConsultationRecordCreate,
        }, { apiName: this.apiName });
        this.deleteByConsultationRecordPrimaryKey = (ConsultationRecordPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/crm/consultationrecords/consultation-record/id`,
            params: { id: ConsultationRecordPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByConsultationRecordPrimaryKey = (ConsultationRecordPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/crm/consultationrecords/consultation-record/id`,
            params: { id: ConsultationRecordPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByConsultationRecordGetList = (ConsultationRecordGetList) => this.restService.request({
            method: 'GET',
            url: `/api/crm/consultationrecords/consultation-record`,
            params: { fields: ConsultationRecordGetList.fields, value: ConsultationRecordGetList.value, sorting: ConsultationRecordGetList.sorting, skipCount: ConsultationRecordGetList.skipCount, maxResultCount: ConsultationRecordGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.updateByConsultationRecordPrimaryKeyAndConsultationRecordUpdate = (ConsultationRecordPrimaryKey, ConsultationRecordUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/crm/consultationrecords/consultation-record/id`,
            params: { id: ConsultationRecordPrimaryKey.id },
            body: ConsultationRecordUpdate,
        }, { apiName: this.apiName });
    }
}
ConsultationRecordsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConsultationRecordsApiService_Factory() { return new ConsultationRecordsApiService(i0.ɵɵinject(i1.RestService)); }, token: ConsultationRecordsApiService, providedIn: "root" });
ConsultationRecordsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConsultationRecordsApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=consultation-records-api.service.js.map