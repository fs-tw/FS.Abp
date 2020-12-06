import type { ProjectCreateDto, ProjectGetListDto, ProjectPrimaryKeyDto, ProjectUpdateDto, ProjectWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  apiName = 'Default';

  createByProjectCreate = (ProjectCreate: ProjectCreateDto) =>
    this.restService.request<any, ProjectWithDetailsDto>({
      method: 'POST',
      url: `/api/crm/projects/project`,
      body: ProjectCreate,
    },
    { apiName: this.apiName });

  deleteByProjectPrimaryKey = (ProjectPrimaryKey: ProjectPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/crm/projects/project/id`,
      params: { id: ProjectPrimaryKey.id },
    },
    { apiName: this.apiName });

  getByProjectPrimaryKey = (ProjectPrimaryKey: ProjectPrimaryKeyDto) =>
    this.restService.request<any, ProjectWithDetailsDto>({
      method: 'GET',
      url: `/api/crm/projects/project/id`,
      params: { id: ProjectPrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByProjectGetList = (ProjectGetList: ProjectGetListDto) =>
    this.restService.request<any, PagedResultDto<ProjectWithDetailsDto>>({
      method: 'GET',
      url: `/api/crm/projects/project`,
      params: { fields: ProjectGetList.fields, value: ProjectGetList.value, sorting: ProjectGetList.sorting, skipCount: ProjectGetList.skipCount, maxResultCount: ProjectGetList.maxResultCount },
    },
    { apiName: this.apiName });

  updateByProjectPrimaryKeyAndProjectUpdate = (ProjectPrimaryKey: ProjectPrimaryKeyDto, ProjectUpdate: ProjectUpdateDto) =>
    this.restService.request<any, ProjectWithDetailsDto>({
      method: 'PUT',
      url: `/api/crm/projects/project/id`,
      params: { id: ProjectPrimaryKey.id },
      body: ProjectUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
