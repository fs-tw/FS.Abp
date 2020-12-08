import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { SaasStateService } from '../services/saas-state.service';
import { SaasState } from '../states';
import { Store } from '@ngxs/store';
import * as SaasActions from '../actions/saas.actions';

describe('SaasStateService', () => {
  let service: SaasStateService;
  let spectator: SpectatorService<SaasStateService>;
  let store: SpyObject<Store>;
  const createService = createServiceFactory({ service: SaasStateService, mocks: [Store] });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.inject(Store);
  });

  test('should have the all SaasState static methods', () => {
    const reg = /(?<=static )(.*)(?=\()/gm;
    SaasState.toString()
      .match(reg)
      .forEach(fnName => {
        expect(service[fnName]).toBeTruthy();
      });
  });

  test('should have a dispatch method for every SaasState action', () => {
    const reg = /(?<=dispatch)(\w+)(?=\()/gm;
    SaasStateService.toString()
      .match(reg)
      .forEach(fnName => {
        expect(SaasActions[fnName]).toBeTruthy();

        const spy = jest.spyOn(store, 'dispatch');
        spy.mockClear();

        const params = Array.from(new Array(SaasActions[fnName].length));

        service[`dispatch${fnName}`](...params);
        expect(spy).toHaveBeenCalledWith(new SaasActions[fnName](...params));
      });
  });
});
