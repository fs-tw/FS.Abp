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
import { eIdentityServerComponents } from '../enums/components';
import {
  IdentityServerCreateFormPropContributors,
  IdentityServerEditFormPropContributors,
  IdentityServerEntityActionContributors,
  IdentityServerEntityPropContributors,
  IdentityServerToolbarActionContributors,
} from '../models/config-options';
import {
  DEFAULT_IDENTITY_SERVER_CREATE_FORM_PROPS,
  DEFAULT_IDENTITY_SERVER_EDIT_FORM_PROPS,
  DEFAULT_IDENTITY_SERVER_ENTITY_ACTIONS,
  DEFAULT_IDENTITY_SERVER_ENTITY_PROPS,
  DEFAULT_IDENTITY_SERVER_TOOLBAR_ACTIONS,
  IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS,
} from '../tokens/extensions.token';

@Injectable()
export class IdentityServerExtensionsGuard implements CanActivate {
  constructor(private injector: Injector) {}

  canActivate(): Observable<boolean> {
    const extensions: ExtensionsService = this.injector.get(ExtensionsService);
    const actionContributors: IdentityServerEntityActionContributors =
      this.injector.get(IDENTITY_SERVER_ENTITY_ACTION_CONTRIBUTORS, null) || {};
    const toolbarContributors: IdentityServerToolbarActionContributors =
      this.injector.get(IDENTITY_SERVER_TOOLBAR_ACTION_CONTRIBUTORS, null) || {};
    const propContributors: IdentityServerEntityPropContributors =
      this.injector.get(IDENTITY_SERVER_ENTITY_PROP_CONTRIBUTORS, null) || {};
    const createFormContributors: IdentityServerCreateFormPropContributors =
      this.injector.get(IDENTITY_SERVER_CREATE_FORM_PROP_CONTRIBUTORS, null) || {};
    const editFormContributors: IdentityServerEditFormPropContributors =
      this.injector.get(IDENTITY_SERVER_EDIT_FORM_PROP_CONTRIBUTORS, null) || {};

    const configState = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(configState, 'IdentityServer').pipe(
      map(entities => ({
        [eIdentityServerComponents.ApiResources]: entities.ApiResource,
        [eIdentityServerComponents.Clients]: entities.Client,
        [eIdentityServerComponents.IdentityResources]: entities.IdentityResource,
        [eIdentityServerComponents.ApiScopes]: entities.ApiScope,
      })),
      mapEntitiesToContributors(configState, 'AbpIdentityServer'),
      tap(objectExtensionContributors => {
        mergeWithDefaultActions(
          extensions.entityActions,
          DEFAULT_IDENTITY_SERVER_ENTITY_ACTIONS,
          actionContributors,
        );
        mergeWithDefaultActions(
          extensions.toolbarActions,
          DEFAULT_IDENTITY_SERVER_TOOLBAR_ACTIONS,
          toolbarContributors,
        );
        mergeWithDefaultProps(
          extensions.entityProps,
          DEFAULT_IDENTITY_SERVER_ENTITY_PROPS,
          objectExtensionContributors.prop,
          propContributors,
        );
        mergeWithDefaultProps(
          extensions.createFormProps,
          DEFAULT_IDENTITY_SERVER_CREATE_FORM_PROPS,
          objectExtensionContributors.createForm,
          createFormContributors,
        );
        mergeWithDefaultProps(
          extensions.editFormProps,
          DEFAULT_IDENTITY_SERVER_EDIT_FORM_PROPS,
          objectExtensionContributors.editForm,
          editFormContributors,
        );
      }),
      mapTo(true),
    );
  }
}
