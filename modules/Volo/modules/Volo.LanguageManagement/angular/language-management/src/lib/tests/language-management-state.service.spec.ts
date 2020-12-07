import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { LanguageManagementStateService } from '../services/language-management-state.service';
import { LanguageManagementState } from '../states';
import { Store } from '@ngxs/store';
import * as LanguageManagementActions from '../actions';

describe('LanguageManagementStateService', () => {
  let service: LanguageManagementStateService;
  let spectator: SpectatorService<LanguageManagementStateService>;
  let store: SpyObject<Store>;
  const createService = createServiceFactory({
    service: LanguageManagementStateService,
    mocks: [Store],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.inject(Store);
  });

  test('should have the all LanguageManagementState static methods', () => {
    const reg = /(?<=static )(.*)(?=\()/gm;
    LanguageManagementState.toString()
      .match(reg)
      .forEach(fnName => {
        expect(service[fnName]).toBeTruthy();
      });
  });

  test('should have a dispatch method for every LanguageManagementState action', () => {
    const reg = /(?<=dispatch)(\w+)(?=\()/gm;
    LanguageManagementStateService.toString()
      .match(reg)
      .forEach(fnName => {
        expect(LanguageManagementActions[fnName]).toBeTruthy();

        const spy = jest.spyOn(store, 'dispatch');
        spy.mockClear();

        const params = Array.from(new Array(LanguageManagementActions[fnName].length));

        service[`dispatch${fnName}`](...params);
        expect(spy).toHaveBeenCalledWith(new LanguageManagementActions[fnName](...params));
      });
  });
});
