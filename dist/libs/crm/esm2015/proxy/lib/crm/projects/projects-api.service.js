import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ProjectsApiService {
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
ProjectsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectsApiService_Factory() { return new ProjectsApiService(i0.ɵɵinject(i1.RestService)); }, token: ProjectsApiService, providedIn: "root" });
ProjectsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProjectsApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=projects-api.service.js.map