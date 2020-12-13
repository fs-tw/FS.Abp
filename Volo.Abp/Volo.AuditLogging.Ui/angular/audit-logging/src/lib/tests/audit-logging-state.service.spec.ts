import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { AuditLoggingStateService } from '../services/audit-logging-state.service';
import { AuditLoggingState } from '../states';
import { Store } from '@ngxs/store';
import * as AuditLoggingActions from '../actions';

describe('AuditLoggingStateService', () => {
  let service: AuditLoggingStateService;
  let spectator: SpectatorService<AuditLoggingStateService>;
  let store: SpyObject<Store>;
  const createService = createServiceFactory({ service: AuditLoggingStateService, mocks: [Store] });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.inject(Store);
  });

  test('should have the all AuditLoggingState static methods', () => {
    const reg = /(?<=static )(.*)(?=\()/gm;
    AuditLoggingState.toString()
      .match(reg)
      .forEach(fnName => {
        expect(service[fnName]).toBeTruthy();
      });
  });

  test('should have a dispatch method for every AuditLoggingState action', () => {
    const reg = /(?<=dispatch)(\w+)(?=\()/gm;
    AuditLoggingStateService.toString()
      .match(reg)
      .forEach(fnName => {
        expect(AuditLoggingActions[fnName]).toBeTruthy();

        const spy = jest.spyOn(store, 'dispatch');
        spy.mockClear();

        const params = Array.from(new Array(AuditLoggingActions[fnName].length));

        service[`dispatch${fnName}`](...params);
        expect(spy).toHaveBeenCalledWith(new AuditLoggingActions[fnName](...params));
      });
  });
});
