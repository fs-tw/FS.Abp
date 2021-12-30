import type { ListAuditLogByAbpRouteName } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AuditLogDto } from '../dtos/models';

@Injectable({
  providedIn: 'root',
})
export class AuditLogMediatorQueryService {
  apiName = 'audit-logging';

  listAuditLogByAbpRouteName = (request: ListAuditLogByAbpRouteName) =>
    this.restService.request<any, PagedResultDto<AuditLogDto>>({
      method: 'POST',
      url: '/api/audit-logging/audit-log-mediator-query/list-audit-log-by-abp-route-name',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
