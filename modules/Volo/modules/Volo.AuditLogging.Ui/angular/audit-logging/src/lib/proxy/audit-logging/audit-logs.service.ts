import type {
  AuditLogDto,
  EntityChangeDto,
  EntityChangeFilter,
  EntityChangeWithUsernameDto,
  GetAuditLogListDto,
  GetAverageExecutionDurationPerDayInput,
  GetAverageExecutionDurationPerDayOutput,
  GetEntityChangesDto,
  GetErrorRateFilter,
  GetErrorRateOutput
} from './models';
import type { PagedResultDto } from '@abp/ng.core';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogsService {
  apiName = 'AbpAuditLogging';

  get = (id: string) =>
    this.restService.request<any, AuditLogDto>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/${id}`,
      },
      { apiName: this.apiName },
    );

  getAverageExecutionDurationPerDay = (filter: GetAverageExecutionDurationPerDayInput) =>
    this.restService.request<any, GetAverageExecutionDurationPerDayOutput>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/statistics/average-execution-duration-per-day`,
        params: { startDate: filter.startDate, endDate: filter.endDate },
      },
      { apiName: this.apiName },
    );

  getEntityChange = (entityChangeId: string) =>
    this.restService.request<any, EntityChangeDto>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/entity-changes/${entityChangeId}`,
      },
      { apiName: this.apiName },
    );

  getEntityChangeWithUsername = (entityChangeId: string) =>
    this.restService.request<any, EntityChangeWithUsernameDto>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/entity-change-with-username/${entityChangeId}`,
      },
      { apiName: this.apiName },
    );

  getEntityChanges = (input: GetEntityChangesDto) =>
    this.restService.request<any, PagedResultDto<EntityChangeDto>>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/entity-changes`,
        params: {
          auditLogId: input.auditLogId,
          entityChangeType: input.entityChangeType,
          entityId: input.entityId,
          entityTypeFullName: input.entityTypeFullName,
          startDate: input.startDate,
          endDate: input.endDate,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName },
    );

  getEntityChangesWithUsername = (input: EntityChangeFilter) =>
    this.restService.request<any, EntityChangeWithUsernameDto[]>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/entity-changes-with-username`,
        params: { entityId: input.entityId, entityTypeFullName: input.entityTypeFullName },
      },
      { apiName: this.apiName },
    );

  getErrorRate = (filter: GetErrorRateFilter) =>
    this.restService.request<any, GetErrorRateOutput>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs/statistics/error-rate`,
        params: { startDate: filter.startDate, endDate: filter.endDate },
      },
      { apiName: this.apiName },
    );

  getList = (input: GetAuditLogListDto) =>
    this.restService.request<any, PagedResultDto<AuditLogDto>>(
      {
        method: 'GET',
        url: `/api/audit-logging/audit-logs`,
        params: {
          url: input.url,
          userName: input.userName,
          applicationName: input.applicationName,
          correlationId: input.correlationId,
          httpMethod: input.httpMethod,
          httpStatusCode: input.httpStatusCode,
          maxExecutionDuration: input.maxExecutionDuration,
          minExecutionDuration: input.minExecutionDuration,
          hasException: input.hasException,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName },
    );

  constructor(private restService: RestService) {}
}
