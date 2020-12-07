import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import {
  GetAuditLogs,
  GetAverageExecutionDurationPerDay,
  GetErrorRate,
} from '../actions/audit-logging.actions';
import { AuditLogging } from '../models/audit-logging';
import { AuditLogsService } from '../proxy/audit-logging/audit-logs.service';
import { AuditLogDto } from '../proxy/audit-logging/models';

@State<AuditLogging.State>({
  name: 'AuditLoggingState',
  defaults: {
    result: {},
    averageExecutionStatistics: {},
    errorRateStatistics: {},
  } as AuditLogging.State,
})
@Injectable()
export class AuditLoggingState {
  @Selector()
  static get({ result }: AuditLogging.State): AuditLogDto[] {
    return result.items || [];
  }

  @Selector()
  static getTotalCount({ result }: AuditLogging.State): number {
    return result.totalCount || 0;
  }

  @Selector()
  static getAverageExecutionStatistics({ averageExecutionStatistics }: AuditLogging.State) {
    return averageExecutionStatistics;
  }

  @Selector()
  static getErrorRateStatistics({ errorRateStatistics }: AuditLogging.State) {
    return errorRateStatistics;
  }

  constructor(private service: AuditLogsService) {}

  @Action(GetAuditLogs)
  get({ patchState }: StateContext<AuditLogging.State>, { payload }: GetAuditLogs) {
    return this.service.getList(payload).pipe(
      tap(result =>
        patchState({
          result,
        }),
      ),
    );
  }

  @Action(GetAverageExecutionDurationPerDay)
  getAverageExecutionData(
    { patchState }: StateContext<AuditLogging.State>,
    { payload }: GetAverageExecutionDurationPerDay,
  ) {
    return this.service.getAverageExecutionDurationPerDay(payload).pipe(
      tap(averageExecution => {
        patchState({
          averageExecutionStatistics: averageExecution.data,
        });
      }),
    );
  }

  @Action(GetErrorRate)
  getErrorRate({ patchState }: StateContext<AuditLogging.State>, { payload }: GetErrorRate) {
    return this.service.getErrorRate(payload).pipe(
      tap(errorRate => {
        patchState({
          errorRateStatistics: errorRate.data,
        });
      }),
    );
  }
}
