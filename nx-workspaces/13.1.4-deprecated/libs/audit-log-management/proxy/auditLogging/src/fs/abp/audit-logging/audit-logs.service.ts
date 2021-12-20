import type { AuditLogDto, AuditLoggingFilter, GetAuditLogListInput } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogsService {
  apiName = 'AbpAuditLogging';

  getDetailsListByInput = (input: GetAuditLogListInput) =>
    this.restService.request<any, PagedResultDto<AuditLogDto>>({
      method: 'GET',
      url: '/api/audit-logging/audit-logs/details-list',
      params: { applicationName: input.applicationName, clientName: input.clientName, skipCount: input.skipCount, maxResultCount: input.maxResultCount, page: input.page, perPage: input.perPage, combineWith: input.combineWith, sort: input.sort, sortBy: input.sortBy, sorting: input.sorting },
    },
    { apiName: this.apiName });

  getFilters = () =>
    this.restService.request<any, Record<string, AuditLoggingFilter>>({
      method: 'GET',
      url: '/api/audit-logging/audit-logs/filters',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
