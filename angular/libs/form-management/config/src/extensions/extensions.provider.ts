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

import { DEFAULT_VERSIONDEFINITION_CREATE_FORM_PROPS } from '../default/versiondefinition/default-versiondefinition-create-form-props';
import { DEFAULT_VERSIONDEFINITION_EDIT_FORM_PROPS } from '../default/versiondefinition/default-versiondefinition-edit-form-props';
import { DEFAULT_VERSIONDEFINITION_ENTITY_PROPS } from '../default/versiondefinition/default-versiondefinition-entity-props';
import { DEFAULT_VERSIONDEFINITION_ENTITY_ACTIONS } from '../default/versiondefinition/default-versiondefinition-entity-actions';
import { DEFAULT_VERSIONDEFINITION_TOOLBAR_ACTIONS } from '../default/versiondefinition/default-versiondefinition-toolbar-actions';

import { DEFAULT_FORMAL_CREATE_FORM_PROPS } from '../default/formal/default-formal-create-form-props';
import { DEFAULT_FORMAL_EDIT_FORM_PROPS } from '../default/formal/default-formal-edit-form-props';
import { DEFAULT_FORMAL_ENTITY_PROPS } from '../default/formal/default-formal-entity-props';
import { DEFAULT_FORMAL_ENTITY_ACTIONS } from '../default/formal/default-formal-entity-actions';
import { DEFAULT_FORMAL_TOOLBAR_ACTIONS } from '../default/formal/default-formal-toolbar-actions';

import { DEFAULT_GROUP_CREATE_FORM_PROPS } from '../default/group/default-group-create-form-props';
import { DEFAULT_GROUP_EDIT_FORM_PROPS } from '../default/group/default-group-edit-form-props';
import { DEFAULT_GROUP_ENTITY_PROPS } from '../default/group/default-group-entity-props';
import { DEFAULT_GROUP_ENTITY_ACTIONS } from '../default/group/default-group-entity-actions';
import { DEFAULT_GROUP_TOOLBAR_ACTIONS } from '../default/group/default-group-toolbar-actions';

import { DEFAULT_ITEM_CREATE_FORM_PROPS } from '../default/item/default-item-create-form-props';
import { DEFAULT_ITEM_EDIT_FORM_PROPS } from '../default/item/default-item-edit-form-props';
import { DEFAULT_ITEM_ENTITY_PROPS } from '../default/item/default-item-entity-props';
import { DEFAULT_ITEM_ENTITY_ACTIONS } from '../default/item/default-item-entity-actions';
import { DEFAULT_ITEM_TOOLBAR_ACTIONS } from '../default/item/default-item-toolbar-actions';

import { DEFAULT_RECORD_CREATE_FORM_PROPS } from '../default/record/default-record-create-form-props';
import { DEFAULT_RECORD_EDIT_FORM_PROPS } from '../default/record/default-record-edit-form-props';
import { DEFAULT_RECORD_ENTITY_PROPS } from '../default/record/default-record-entity-props';
import { DEFAULT_RECORD_ENTITY_ACTIONS } from '../default/record/default-record-entity-actions';
import { DEFAULT_RECORD_TOOLBAR_ACTIONS } from '../default/record/default-record-toolbar-actions';

import { DEFAULT_RECORDITEM_CREATE_FORM_PROPS } from '../default/recorditem/default-recorditem-create-form-props';
import { DEFAULT_RECORDITEM_EDIT_FORM_PROPS } from '../default/recorditem/default-recorditem-edit-form-props';
import { DEFAULT_RECORDITEM_ENTITY_PROPS } from '../default/recorditem/default-recorditem-entity-props';
import { DEFAULT_RECORDITEM_ENTITY_ACTIONS } from '../default/recorditem/default-recorditem-entity-actions';
import { DEFAULT_RECORDITEM_TOOLBAR_ACTIONS } from '../default/recorditem/default-recorditem-toolbar-actions';

import { DEFAULT_VERSION_CREATE_FORM_PROPS } from '../default/version/default-version-create-form-props';
import { DEFAULT_VERSION_EDIT_FORM_PROPS } from '../default/version/default-version-edit-form-props';
import { DEFAULT_VERSION_ENTITY_PROPS } from '../default/version/default-version-entity-props';
import { DEFAULT_VERSION_ENTITY_ACTIONS } from '../default/version/default-version-entity-actions';
import { DEFAULT_VERSION_TOOLBAR_ACTIONS } from '../default/version/default-version-toolbar-actions';



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
            [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_TOOLBAR_ACTIONS,
            [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_TOOLBAR_ACTIONS,
            
          });

          mergeWithDefaultActions(extensions.entityActions, {
            [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_ENTITY_ACTIONS,
            [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_ENTITY_ACTIONS,
           
          });

          mergeWithDefaultProps(extensions.entityProps, {
            [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_ENTITY_PROPS,
            [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_ENTITY_PROPS,
            [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_ENTITY_PROPS,
            [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_ENTITY_PROPS,
            [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_ENTITY_PROPS,
            [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_ENTITY_PROPS,
            [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_ENTITY_PROPS,
           
          });

          mergeWithDefaultProps(extensions.createFormProps, {
            [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_CREATE_FORM_PROPS,
            [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_CREATE_FORM_PROPS,

          });

          mergeWithDefaultProps(extensions.editFormProps, {
            [eFormmanagementRouteNames.VersionDefinition]: DEFAULT_VERSIONDEFINITION_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.Formal]: DEFAULT_FORMAL_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.Group]: DEFAULT_GROUP_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.Item]: DEFAULT_ITEM_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.Record]: DEFAULT_RECORD_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.RecordItem]: DEFAULT_RECORDITEM_EDIT_FORM_PROPS,
            [eFormmanagementRouteNames.Version]: DEFAULT_VERSION_EDIT_FORM_PROPS,

          });
        }),
        mapTo(true)
      )
      .toPromise();
  };
}
