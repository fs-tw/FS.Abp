import { PagedResultDto } from '@abp/ng.core';
import { AuditLogDto } from '../proxy/audit-logging/models';

export namespace AuditLogging {
  export interface State {
    result: PagedResultDto<AuditLogDto>;
    averageExecutionStatistics: Record<string, number>;
    errorRateStatistics: Record<string, number>;
  }
}
