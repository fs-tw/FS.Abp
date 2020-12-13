import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { IdentityServerStateService } from '../services/identity-server-state.service';
import { IdentityServerState } from '../states/identity-server.state';
import { Store } from '@ngxs/store';
import * as IdentityServerActions from '../actions';

describe('IdentityServerStateService', () => {
  let service: IdentityServerStateService;
  let spectator: SpectatorService<IdentityServerStateService>;
  let store: SpyObject<Store>;
  const createService = createServiceFactory({
    service: IdentityServerStateService,
    mocks: [Store],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.inject(Store);
  });

  test('should have the all IdentityServerState static methods', () => {
    const reg = /(?<=static )(.*)(?=\()/gm;
    IdentityServerState.toString()
      .match(reg)
      .forEach(fnName => {
        expect(service[fnName]).toBeTruthy();
      });
  });

  test('should have a dispatch method for every IdentityServerState action', () => {
    const reg = /(?<=dispatch)(\w+)(?=\()/gm;
    IdentityServerStateService.toString()
      .match(reg)
      .forEach(fnName => {
        expect(IdentityServerActions[fnName]).toBeTruthy();

        const spy = jest.spyOn(store, 'dispatch');
        spy.mockClear();

        const params = Array.from(new Array(IdentityServerActions[fnName].length));

        service[`dispatch${fnName}`](...params);
        expect(spy).toHaveBeenCalledWith(new IdentityServerActions[fnName](...params));
      });
  });
});
