import type { EmployeeCreateDto, EmployeeGetListDto, EmployeePrimaryKeyDto, EmployeeUpdateDto, EmployeeWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  apiName = 'Default';

  createByEmployeeCreate = (EmployeeCreate: EmployeeCreateDto) =>
    this.restService.request<any, EmployeeWithDetailsDto>({
      method: 'POST',
      url: `/api/crm/employees/employee`,
      body: EmployeeCreate,
    },
    { apiName: this.apiName });

  deleteByEmployeePrimaryKey = (EmployeePrimaryKey: EmployeePrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/crm/employees/employee/id`,
      params: { id: EmployeePrimaryKey.id },
    },
    { apiName: this.apiName });

  getByEmployeePrimaryKey = (EmployeePrimaryKey: EmployeePrimaryKeyDto) =>
    this.restService.request<any, EmployeeWithDetailsDto>({
      method: 'GET',
      url: `/api/crm/employees/employee/id`,
      params: { id: EmployeePrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByEmployeeGetList = (EmployeeGetList: EmployeeGetListDto) =>
    this.restService.request<any, PagedResultDto<EmployeeWithDetailsDto>>({
      method: 'GET',
      url: `/api/crm/employees/employee`,
      params: { fields: EmployeeGetList.fields, value: EmployeeGetList.value, sorting: EmployeeGetList.sorting, skipCount: EmployeeGetList.skipCount, maxResultCount: EmployeeGetList.maxResultCount },
    },
    { apiName: this.apiName });

  updateByEmployeePrimaryKeyAndEmployeeUpdate = (EmployeePrimaryKey: EmployeePrimaryKeyDto, EmployeeUpdate: EmployeeUpdateDto) =>
    this.restService.request<any, EmployeeWithDetailsDto>({
      method: 'PUT',
      url: `/api/crm/employees/employee/id`,
      params: { id: EmployeePrimaryKey.id },
      body: EmployeeUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
