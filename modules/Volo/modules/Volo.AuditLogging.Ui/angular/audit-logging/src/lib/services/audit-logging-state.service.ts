import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuditLoggingState } from '../states';
import { GetAuditLogs, GetAverageExecutionDurationPerDay, GetErrorRate } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class AuditLoggingStateService {
  constructor(private store: Store) {}

  get() {
    return this.store.selectSnapshot(AuditLoggingState.get);
  }

  getTotalCount() {
    return this.store.selectSnapshot(AuditLoggingState.getTotalCount);
  }

  getAverageExecutionStatistics() {
    return this.store.selectSnapshot(AuditLoggingState.getAverageExecutionStatistics);
  }

  getErrorRateStatistics() {
    return this.store.selectSnapshot(AuditLoggingState.getErrorRateStatistics);
  }

  dispatchGetAuditLogs(...args: ConstructorParameters<typeof GetAuditLogs>) {
    return this.store.dispatch(new GetAuditLogs(...args));
  }

  dispatchGetAverageExecutionDurationPerDay(
    ...args: ConstructorParameters<typeof GetAverageExecutionDurationPerDay>
  ) {
    return this.store.dispatch(new GetAverageExecutionDurationPerDay(...args));
  }

  dispatchGetErrorRate(...args: ConstructorParameters<typeof GetErrorRate>) {
    return this.store.dispatch(new GetErrorRate(...args));
  }
}
