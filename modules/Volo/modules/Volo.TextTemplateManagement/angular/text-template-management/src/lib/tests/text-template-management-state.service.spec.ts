import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { TextTemplateManagementStateService } from '../services/text-template-management-state.service';
import { TextTemplateManagementState } from '../state/text-template-management.state';
import { Store } from '@ngxs/store';
import * as TextTemplateManagementActions from '../state/text-template-management.actions';

describe('TextTemplateManagementStateService', () => {
  let service: TextTemplateManagementStateService;
  let spectator: SpectatorService<TextTemplateManagementStateService>;
  let store: SpyObject<Store>;
  const createService = createServiceFactory({
    service: TextTemplateManagementStateService,
    mocks: [Store],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    store = spectator.inject(Store);
  });

  test('should have the all TextTemplateManagementState static methods', () => {
    const reg = /(?<=static )(.*)(?=\()/gm;
    TextTemplateManagementState.toString()
      .match(reg)
      .forEach(fnName => {
        expect(service[fnName]).toBeTruthy();
      });
  });

  test('should have a dispatch method for every TextTemplateManagementState action', () => {
    const reg = /(?<=dispatch)(\w+)(?=\()/gm;
    TextTemplateManagementStateService.toString()
      .match(reg)
      .forEach(fnName => {
        expect(TextTemplateManagementActions[fnName]).toBeTruthy();

        const spy = jest.spyOn(store, 'dispatch');
        spy.mockClear();

        const params = Array.from(new Array(TextTemplateManagementActions[fnName].length));

        service[`dispatch${fnName}`](...params);
        expect(spy).toHaveBeenCalledWith(new TextTemplateManagementActions[fnName](...params));
      });
  });
});
