import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { Injectable, Injector } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { eLanguageManagementComponents } from '../enums/components';
import {
  LanguageManagementCreateFormPropContributors,
  LanguageManagementEditFormPropContributors,
  LanguageManagementEntityActionContributors,
  LanguageManagementEntityPropContributors,
  LanguageManagementToolbarActionContributors,
} from '../models/config-options';
import {
  DEFAULT_LANGUAGE_MANAGEMENT_CREATE_FORM_PROPS,
  DEFAULT_LANGUAGE_MANAGEMENT_EDIT_FORM_PROPS,
  DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_ACTIONS,
  DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_PROPS,
  DEFAULT_LANGUAGE_MANAGEMENT_TOOLBAR_ACTIONS,
  LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
} from '../tokens/extensions.token';

@Injectable()
export class LanguageManagementExtensionsGuard implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);
    const actionContributors: LanguageManagementEntityActionContributors =
      this.injector.get(LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, null) || {};
    const toolbarContributors: LanguageManagementToolbarActionContributors =
      this.injector.get(LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
    const propContributors: LanguageManagementEntityPropContributors =
      this.injector.get(LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, null) || {};
    const createFormContributors: LanguageManagementCreateFormPropContributors =
      this.injector.get(LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
    const editFormContributors: LanguageManagementEditFormPropContributors =
      this.injector.get(LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};

    const configState = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(configState, 'LanguageManagement').pipe(
      map(entities => ({
        [eLanguageManagementComponents.Languages]: entities.Language,
      })),
      mapEntitiesToContributors(configState, 'LanguageManagement'),
      tap(objectExtensionContributors => {
        mergeWithDefaultActions(
          extensions.entityActions,
          DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_ACTIONS,
          actionContributors,
        );
        mergeWithDefaultActions(
          extensions.toolbarActions,
          DEFAULT_LANGUAGE_MANAGEMENT_TOOLBAR_ACTIONS,
          toolbarContributors,
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_PROPS,
          objectExtensionContributors.prop,
          propContributors,
        );
        mergeWithDefaultProps(
          extensions.createFormProps,
          DEFAULT_LANGUAGE_MANAGEMENT_CREATE_FORM_PROPS,
          objectExtensionContributors.createForm,
          createFormContributors,
        );
        mergeWithDefaultProps(
          extensions.editFormProps,
          DEFAULT_LANGUAGE_MANAGEMENT_EDIT_FORM_PROPS,
          objectExtensionContributors.editForm,
          editFormContributors,
        );
      }),
      mapTo(true),
    );
  }
}
