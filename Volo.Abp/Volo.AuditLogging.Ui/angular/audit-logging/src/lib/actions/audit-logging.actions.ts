import {
  GetAuditLogListDto,
  GetAverageExecutionDurationPerDayInput,
  GetErrorRateFilter,
} from '../proxy/audit-logging/models';

export class GetAuditLogs {
  static readonly type = '[AuditLogging] Get';
  constructor(public payload?: GetAuditLogListDto) {}
}

export class GetAverageExecutionDurationPerDay {
  static readonly type = '[AuditLogging] Get Average Execution Duration Per Day';
  constructor(public payload: GetAverageExecutionDurationPerDayInput) {}
}

export class GetErrorRate {
  static readonly type = '[AuditLogging] Get Error Rate';
  constructor(public payload: GetErrorRateFilter) {}
}
