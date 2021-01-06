import { RestService, mapEnumToOptions } from '@abp/ng.core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';

class ConsultationRecordsApiService {
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
ConsultationRecordsApiService.ɵprov = ɵɵdefineInjectable({ factory: function ConsultationRecordsApiService_Factory() { return new ConsultationRecordsApiService(ɵɵinject(RestService)); }, token: ConsultationRecordsApiService, providedIn: "root" });
ConsultationRecordsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConsultationRecordsApiService.ctorParameters = () => [
    { type: RestService }
];

var CustomerDiscriminator;
(function (CustomerDiscriminator) {
    CustomerDiscriminator[CustomerDiscriminator["\u5BA2\u6236"] = 0] = "\u5BA2\u6236";
    CustomerDiscriminator[CustomerDiscriminator["\u500B\u4EBA"] = 1] = "\u500B\u4EBA";
    CustomerDiscriminator[CustomerDiscriminator["\u4F01\u696D"] = 2] = "\u4F01\u696D";
})(CustomerDiscriminator || (CustomerDiscriminator = {}));
const customerDiscriminatorOptions = mapEnumToOptions(CustomerDiscriminator);

class CustomersApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByCustomerCreate = (CustomerCreate) => this.restService.request({
            method: 'POST',
            url: `/api/crm/customers/customer`,
            body: CustomerCreate,
        }, { apiName: this.apiName });
        this.deleteByCustomerPrimaryKey = (CustomerPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/crm/customers/customer/id`,
            params: { id: CustomerPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByCustomerPrimaryKey = (CustomerPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/crm/customers/customer/id`,
            params: { id: CustomerPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByCustomerGetList = (CustomerGetList) => this.restService.request({
            method: 'GET',
            url: `/api/crm/customers/customer`,
            params: { fields: CustomerGetList.fields, value: CustomerGetList.value, sorting: CustomerGetList.sorting, skipCount: CustomerGetList.skipCount, maxResultCount: CustomerGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.updateByCustomerPrimaryKeyAndCustomerUpdate = (CustomerPrimaryKey, CustomerUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/crm/customers/customer/id`,
            params: { id: CustomerPrimaryKey.id },
            body: CustomerUpdate,
        }, { apiName: this.apiName });
    }
}
CustomersApiService.ɵprov = ɵɵdefineInjectable({ factory: function CustomersApiService_Factory() { return new CustomersApiService(ɵɵinject(RestService)); }, token: CustomersApiService, providedIn: "root" });
CustomersApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CustomersApiService.ctorParameters = () => [
    { type: RestService }
];

class DefinitionsService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getBasicDataDefinition = () => this.restService.request({
            method: 'GET',
            url: `/api/crm/definitions/basic-data-definition`,
        }, { apiName: this.apiName });
    }
}
DefinitionsService.ɵprov = ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(ɵɵinject(RestService)); }, token: DefinitionsService, providedIn: "root" });
DefinitionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DefinitionsService.ctorParameters = () => [
    { type: RestService }
];

class EmployeesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByEmployeeCreate = (EmployeeCreate) => this.restService.request({
            method: 'POST',
            url: `/api/crm/employees/employee`,
            body: EmployeeCreate,
        }, { apiName: this.apiName });
        this.deleteByEmployeePrimaryKey = (EmployeePrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/crm/employees/employee/id`,
            params: { id: EmployeePrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByEmployeePrimaryKey = (EmployeePrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/crm/employees/employee/id`,
            params: { id: EmployeePrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByEmployeeGetList = (EmployeeGetList) => this.restService.request({
            method: 'GET',
            url: `/api/crm/employees/employee`,
            params: { fields: EmployeeGetList.fields, value: EmployeeGetList.value, sorting: EmployeeGetList.sorting, skipCount: EmployeeGetList.skipCount, maxResultCount: EmployeeGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.updateByEmployeePrimaryKeyAndEmployeeUpdate = (EmployeePrimaryKey, EmployeeUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/crm/employees/employee/id`,
            params: { id: EmployeePrimaryKey.id },
            body: EmployeeUpdate,
        }, { apiName: this.apiName });
    }
}
EmployeesApiService.ɵprov = ɵɵdefineInjectable({ factory: function EmployeesApiService_Factory() { return new EmployeesApiService(ɵɵinject(RestService)); }, token: EmployeesApiService, providedIn: "root" });
EmployeesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
EmployeesApiService.ctorParameters = () => [
    { type: RestService }
];

class ProjectsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByProjectCreate = (ProjectCreate) => this.restService.request({
            method: 'POST',
            url: `/api/crm/projects/project`,
            body: ProjectCreate,
        }, { apiName: this.apiName });
        this.deleteByProjectPrimaryKey = (ProjectPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/crm/projects/project/id`,
            params: { id: ProjectPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByProjectPrimaryKey = (ProjectPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/crm/projects/project/id`,
            params: { id: ProjectPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByProjectGetList = (ProjectGetList) => this.restService.request({
            method: 'GET',
            url: `/api/crm/projects/project`,
            params: { fields: ProjectGetList.fields, value: ProjectGetList.value, sorting: ProjectGetList.sorting, skipCount: ProjectGetList.skipCount, maxResultCount: ProjectGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.updateByProjectPrimaryKeyAndProjectUpdate = (ProjectPrimaryKey, ProjectUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/crm/projects/project/id`,
            params: { id: ProjectPrimaryKey.id },
            body: ProjectUpdate,
        }, { apiName: this.apiName });
    }
}
ProjectsApiService.ɵprov = ɵɵdefineInjectable({ factory: function ProjectsApiService_Factory() { return new ProjectsApiService(ɵɵinject(RestService)); }, token: ProjectsApiService, providedIn: "root" });
ProjectsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProjectsApiService.ctorParameters = () => [
    { type: RestService }
];

var GenderType;
(function (GenderType) {
    GenderType[GenderType["\u7537"] = 0] = "\u7537";
    GenderType[GenderType["\u5973"] = 1] = "\u5973";
    GenderType[GenderType["\u4E0D\u516C\u958B"] = 3] = "\u4E0D\u516C\u958B";
})(GenderType || (GenderType = {}));
const genderTypeOptions = mapEnumToOptions(GenderType);

/**
 * Generated bundle index. Do not edit.
 */

export { ConsultationRecordsApiService, CustomerDiscriminator, CustomersApiService, DefinitionsService, EmployeesApiService, GenderType, ProjectsApiService, customerDiscriminatorOptions, genderTypeOptions };
//# sourceMappingURL=fs-tw-crm-proxy.js.map
