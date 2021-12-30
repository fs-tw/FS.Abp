import type { AuditLogActionDto, AuditLogDto } from './dtos/models';
import type { AuditLogActionFilter } from './filters/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { Range } from '../../../auto-filterer/types/models';

@Injectable({
  providedIn: 'root',
})
export class AuditLoggingService {
  apiName = 'audit-logging';

  get = (id: string) =>
    this.restService.request<any, AuditLogDto>({
      method: 'GET',
      url: `/api/audit-logging/audit-logging/${id}`,
    },
    { apiName: this.apiName });

  getAuditLogActionSearch = (filterName: string, search?: string, executionTime?: Range<string>, skipCount?: number, maxResultCount: number = 50, sorting: string = 'ExecutionTime') =>
    this.restService.request<any, PagedResultDto<AuditLogActionDto>>({
      method: 'GET',
      url: '/api/audit-logging/audit-logging/audit-log-action-search',
      params: { filterName, search, min: executionTime.min, max: executionTime.max, skipCount, maxResultCount, sorting },
    },
    { apiName: this.apiName });

  getFilters = () =>
    this.restService.request<any, Record<string, AuditLogActionFilter[]>>({
      method: 'GET',
      url: '/api/audit-logging/audit-logging/filters',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
