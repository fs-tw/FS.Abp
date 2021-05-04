import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { eFormmanagementRouteNames } from '../enums/route-names';
import { map, mapTo, tap } from 'rxjs/operators';
import { eFormsComponents } from '../enums/components';

import { DEFAULT_FORM_TOOLBAR_ACTIONS } from '../defaults/forms/default-form-toolbar-actions';
import { DEFAULT_FORM_ENTITY_ACTIONS } from '../defaults/forms/default-form-entity-actions';
import { DEFAULT_FORM_ENTITY_PROPS } from '../defaults/forms/default-form-entity-props';
import {
  DEFAULT_FORM_CREATE_FORM_PROPS,
  DEFAULT_FORM_EDIT_FORM_PROPS,
} from '../defaults/forms/default-form-form-props';

export const FORM_MANAGEMENT_EXTENSIONS_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configure,
    deps: [Injector],
    multi: true,
  },
];

function configure(injector: Injector) {
  return () => {
    const extensions: ExtensionsService = injector.get(ExtensionsService);
    const configState = injector.get(ConfigStateService);

    return getObjectExtensionEntitiesFromStore(configState, 'Form-management')
      .pipe(
        map((entities) => ({})),
        mapEntitiesToContributors(configState, 'Form-management'),
        tap((objectExtensionContributors) => {
          mergeWithDefaultActions(extensions.toolbarActions, {
            [eFormsComponents.Form]: DEFAULT_FORM_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_TOOLBAR_ACTIONS,
            // [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_TOOLBAR_ACTIONS,
          });

          mergeWithDefaultActions(extensions.entityActions, {
            [eFormsComponents.Form]: DEFAULT_FORM_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_ENTITY_ACTIONS,
            // [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_ENTITY_ACTIONS,
          });

          mergeWithDefaultProps(extensions.entityProps, {
            [eFormsComponents.Form]: DEFAULT_FORM_ENTITY_PROPS,
            // [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_ENTITY_PROPS,
            // [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_ENTITY_PROPS,
            // [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_ENTITY_PROPS,
            // [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_ENTITY_PROPS,
            // [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_ENTITY_PROPS,
            // [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_ENTITY_PROPS,
            // [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_ENTITY_PROPS,
          });

          mergeWithDefaultProps(extensions.createFormProps, {
            [eFormsComponents.Form]: DEFAULT_FORM_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_CREATE_FORM_PROPS,
            // [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_CREATE_FORM_PROPS,
          });

          mergeWithDefaultProps(extensions.editFormProps, {
            [eFormsComponents.Form]: DEFAULT_FORM_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_EDIT_FORM_PROPS,
            // [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_EDIT_FORM_PROPS,
          });
        }),
        mapTo(true)
      )
      .toPromise();
  };
}
