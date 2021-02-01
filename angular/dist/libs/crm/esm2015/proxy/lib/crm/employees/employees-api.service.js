import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class EmployeesApiService {
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
EmployeesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesApiService_Factory() { return new EmployeesApiService(i0.ɵɵinject(i1.RestService)); }, token: EmployeesApiService, providedIn: "root" });
EmployeesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
EmployeesApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=employees-api.service.js.map