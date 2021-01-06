import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class CustomersApiService {
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
CustomersApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomersApiService_Factory() { return new CustomersApiService(i0.ɵɵinject(i1.RestService)); }, token: CustomersApiService, providedIn: "root" });
CustomersApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CustomersApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=customers-api.service.js.map