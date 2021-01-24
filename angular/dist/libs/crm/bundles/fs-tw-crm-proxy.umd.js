(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/crm/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].crm = global['fs-tw'].crm || {}, global['fs-tw'].crm.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var ConsultationRecordsApiService = /** @class */ (function () {
        function ConsultationRecordsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByConsultationRecordCreate = function (ConsultationRecordCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/crm/consultationrecords/consultation-record",
                body: ConsultationRecordCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByConsultationRecordPrimaryKey = function (ConsultationRecordPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/crm/consultationrecords/consultation-record/id",
                params: { id: ConsultationRecordPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByConsultationRecordPrimaryKey = function (ConsultationRecordPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/consultationrecords/consultation-record/id",
                params: { id: ConsultationRecordPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByConsultationRecordGetList = function (ConsultationRecordGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/consultationrecords/consultation-record",
                params: { fields: ConsultationRecordGetList.fields, value: ConsultationRecordGetList.value, sorting: ConsultationRecordGetList.sorting, skipCount: ConsultationRecordGetList.skipCount, maxResultCount: ConsultationRecordGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.updateByConsultationRecordPrimaryKeyAndConsultationRecordUpdate = function (ConsultationRecordPrimaryKey, ConsultationRecordUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/crm/consultationrecords/consultation-record/id",
                params: { id: ConsultationRecordPrimaryKey.id },
                body: ConsultationRecordUpdate,
            }, { apiName: _this.apiName }); };
        }
        return ConsultationRecordsApiService;
    }());
    ConsultationRecordsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConsultationRecordsApiService_Factory() { return new ConsultationRecordsApiService(i0.ɵɵinject(i1.RestService)); }, token: ConsultationRecordsApiService, providedIn: "root" });
    ConsultationRecordsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ConsultationRecordsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    (function (CustomerDiscriminator) {
        CustomerDiscriminator[CustomerDiscriminator["\u5BA2\u6236"] = 0] = "\u5BA2\u6236";
        CustomerDiscriminator[CustomerDiscriminator["\u500B\u4EBA"] = 1] = "\u500B\u4EBA";
        CustomerDiscriminator[CustomerDiscriminator["\u4F01\u696D"] = 2] = "\u4F01\u696D";
    })(exports.CustomerDiscriminator || (exports.CustomerDiscriminator = {}));
    var customerDiscriminatorOptions = i1.mapEnumToOptions(exports.CustomerDiscriminator);

    var CustomersApiService = /** @class */ (function () {
        function CustomersApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByCustomerCreate = function (CustomerCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/crm/customers/customer",
                body: CustomerCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByCustomerPrimaryKey = function (CustomerPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/crm/customers/customer/id",
                params: { id: CustomerPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByCustomerPrimaryKey = function (CustomerPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/customers/customer/id",
                params: { id: CustomerPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByCustomerGetList = function (CustomerGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/customers/customer",
                params: { fields: CustomerGetList.fields, value: CustomerGetList.value, sorting: CustomerGetList.sorting, skipCount: CustomerGetList.skipCount, maxResultCount: CustomerGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.updateByCustomerPrimaryKeyAndCustomerUpdate = function (CustomerPrimaryKey, CustomerUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/crm/customers/customer/id",
                params: { id: CustomerPrimaryKey.id },
                body: CustomerUpdate,
            }, { apiName: _this.apiName }); };
        }
        return CustomersApiService;
    }());
    CustomersApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomersApiService_Factory() { return new CustomersApiService(i0.ɵɵinject(i1.RestService)); }, token: CustomersApiService, providedIn: "root" });
    CustomersApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    CustomersApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var DefinitionsService = /** @class */ (function () {
        function DefinitionsService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getBasicDataDefinition = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/definitions/basic-data-definition",
            }, { apiName: _this.apiName }); };
        }
        return DefinitionsService;
    }());
    DefinitionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(i0.ɵɵinject(i1.RestService)); }, token: DefinitionsService, providedIn: "root" });
    DefinitionsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DefinitionsService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var EmployeesApiService = /** @class */ (function () {
        function EmployeesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByEmployeeCreate = function (EmployeeCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/crm/employees/employee",
                body: EmployeeCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByEmployeePrimaryKey = function (EmployeePrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/crm/employees/employee/id",
                params: { id: EmployeePrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByEmployeePrimaryKey = function (EmployeePrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/employees/employee/id",
                params: { id: EmployeePrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByEmployeeGetList = function (EmployeeGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/employees/employee",
                params: { fields: EmployeeGetList.fields, value: EmployeeGetList.value, sorting: EmployeeGetList.sorting, skipCount: EmployeeGetList.skipCount, maxResultCount: EmployeeGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.updateByEmployeePrimaryKeyAndEmployeeUpdate = function (EmployeePrimaryKey, EmployeeUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/crm/employees/employee/id",
                params: { id: EmployeePrimaryKey.id },
                body: EmployeeUpdate,
            }, { apiName: _this.apiName }); };
        }
        return EmployeesApiService;
    }());
    EmployeesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmployeesApiService_Factory() { return new EmployeesApiService(i0.ɵɵinject(i1.RestService)); }, token: EmployeesApiService, providedIn: "root" });
    EmployeesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    EmployeesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var ProjectsApiService = /** @class */ (function () {
        function ProjectsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByProjectCreate = function (ProjectCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/crm/projects/project",
                body: ProjectCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByProjectPrimaryKey = function (ProjectPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/crm/projects/project/id",
                params: { id: ProjectPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByProjectPrimaryKey = function (ProjectPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/projects/project/id",
                params: { id: ProjectPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByProjectGetList = function (ProjectGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/crm/projects/project",
                params: { fields: ProjectGetList.fields, value: ProjectGetList.value, sorting: ProjectGetList.sorting, skipCount: ProjectGetList.skipCount, maxResultCount: ProjectGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.updateByProjectPrimaryKeyAndProjectUpdate = function (ProjectPrimaryKey, ProjectUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/crm/projects/project/id",
                params: { id: ProjectPrimaryKey.id },
                body: ProjectUpdate,
            }, { apiName: _this.apiName }); };
        }
        return ProjectsApiService;
    }());
    ProjectsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectsApiService_Factory() { return new ProjectsApiService(i0.ɵɵinject(i1.RestService)); }, token: ProjectsApiService, providedIn: "root" });
    ProjectsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ProjectsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    (function (GenderType) {
        GenderType[GenderType["\u7537"] = 0] = "\u7537";
        GenderType[GenderType["\u5973"] = 1] = "\u5973";
        GenderType[GenderType["\u4E0D\u516C\u958B"] = 3] = "\u4E0D\u516C\u958B";
    })(exports.GenderType || (exports.GenderType = {}));
    var genderTypeOptions = i1.mapEnumToOptions(exports.GenderType);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConsultationRecordsApiService = ConsultationRecordsApiService;
    exports.CustomersApiService = CustomersApiService;
    exports.DefinitionsService = DefinitionsService;
    exports.EmployeesApiService = EmployeesApiService;
    exports.ProjectsApiService = ProjectsApiService;
    exports.customerDiscriminatorOptions = customerDiscriminatorOptions;
    exports.genderTypeOptions = genderTypeOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-crm-proxy.umd.js.map
