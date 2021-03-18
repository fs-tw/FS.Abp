import { ConfigStateService } from '@abp/ng.core';
import { ExtensionsService, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, } from '@abp/ng.theme.shared/extensions';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { map, mapTo, tap } from 'rxjs/operators';
import { DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS } from '../default/documentdefinition/default-documentdefinition-create-form-props';
import { DEFAULT_DOCUMENTDEFINITION_EDIT_FORM_PROPS } from '../default/documentdefinition/default-documentdefinition-edit-form-props';
import { DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS } from '../default/documentdefinition/default-documentdefinition-entity-props';
import { DEFAULT_DOCUMENTDEFINITION_ENTITY_ACTIONS } from '../default/documentdefinition/default-documentdefinition-entity-actions';
import { DEFAULT_DOCUMENTDEFINITION_TOOLBAR_ACTIONS } from '../default/documentdefinition/default-documentdefinition-toolbar-actions';
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
export const EXTENSIONS_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configure,
        deps: [Injector],
        multi: true,
    },
];
function configure(injector) {
    return () => {
        const extensions = injector.get(ExtensionsService);
        const configState = injector.get(ConfigStateService);
        return getObjectExtensionEntitiesFromStore(configState, 'Formmanagement')
            .pipe(map((entities) => ({})), mapEntitiesToContributors(configState, 'Formmanagement'), tap((objectExtensionContributors) => {
            mergeWithDefaultActions(extensions.toolbarActions, {
                ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: DEFAULT_DOCUMENTDEFINITION_TOOLBAR_ACTIONS,
                ["FormManagement::FS.Formal" /* Formal */]: DEFAULT_FORMAL_TOOLBAR_ACTIONS,
                ["FormManagement::FS.Group" /* Group */]: DEFAULT_GROUP_TOOLBAR_ACTIONS,
                ["FormManagement::FS.Item" /* Item */]: DEFAULT_ITEM_TOOLBAR_ACTIONS,
                ["FormManagement::FS.Record" /* Record */]: DEFAULT_RECORD_TOOLBAR_ACTIONS,
                ["FormManagement::FS.RecordItem" /* RecordItem */]: DEFAULT_RECORDITEM_TOOLBAR_ACTIONS,
                ["FormManagement::FS.Version" /* Version */]: DEFAULT_VERSION_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: DEFAULT_DOCUMENTDEFINITION_ENTITY_ACTIONS,
                ["FormManagement::FS.Formal" /* Formal */]: DEFAULT_FORMAL_ENTITY_ACTIONS,
                ["FormManagement::FS.Group" /* Group */]: DEFAULT_GROUP_ENTITY_ACTIONS,
                ["FormManagement::FS.Item" /* Item */]: DEFAULT_ITEM_ENTITY_ACTIONS,
                ["FormManagement::FS.Record" /* Record */]: DEFAULT_RECORD_ENTITY_ACTIONS,
                ["FormManagement::FS.RecordItem" /* RecordItem */]: DEFAULT_RECORDITEM_ENTITY_ACTIONS,
                ["FormManagement::FS.Version" /* Version */]: DEFAULT_VERSION_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS,
                ["FormManagement::FS.Formal" /* Formal */]: DEFAULT_FORMAL_ENTITY_PROPS,
                ["FormManagement::FS.Group" /* Group */]: DEFAULT_GROUP_ENTITY_PROPS,
                ["FormManagement::FS.Item" /* Item */]: DEFAULT_ITEM_ENTITY_PROPS,
                ["FormManagement::FS.Record" /* Record */]: DEFAULT_RECORD_ENTITY_PROPS,
                ["FormManagement::FS.RecordItem" /* RecordItem */]: DEFAULT_RECORDITEM_ENTITY_PROPS,
                ["FormManagement::FS.Version" /* Version */]: DEFAULT_VERSION_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS,
                ["FormManagement::FS.Formal" /* Formal */]: DEFAULT_FORMAL_CREATE_FORM_PROPS,
                ["FormManagement::FS.Group" /* Group */]: DEFAULT_GROUP_CREATE_FORM_PROPS,
                ["FormManagement::FS.Item" /* Item */]: DEFAULT_ITEM_CREATE_FORM_PROPS,
                ["FormManagement::FS.Record" /* Record */]: DEFAULT_RECORD_CREATE_FORM_PROPS,
                ["FormManagement::FS.RecordItem" /* RecordItem */]: DEFAULT_RECORDITEM_CREATE_FORM_PROPS,
                ["FormManagement::FS.Version" /* Version */]: DEFAULT_VERSION_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: DEFAULT_DOCUMENTDEFINITION_EDIT_FORM_PROPS,
                ["FormManagement::FS.Formal" /* Formal */]: DEFAULT_FORMAL_EDIT_FORM_PROPS,
                ["FormManagement::FS.Group" /* Group */]: DEFAULT_GROUP_EDIT_FORM_PROPS,
                ["FormManagement::FS.Item" /* Item */]: DEFAULT_ITEM_EDIT_FORM_PROPS,
                ["FormManagement::FS.Record" /* Record */]: DEFAULT_RECORD_EDIT_FORM_PROPS,
                ["FormManagement::FS.RecordItem" /* RecordItem */]: DEFAULT_RECORDITEM_EDIT_FORM_PROPS,
                ["FormManagement::FS.Version" /* Version */]: DEFAULT_VERSION_EDIT_FORM_PROPS,
            });
        }), mapTo(true))
            .toPromise();
    };
}
//# sourceMappingURL=extensions.provider.js.map