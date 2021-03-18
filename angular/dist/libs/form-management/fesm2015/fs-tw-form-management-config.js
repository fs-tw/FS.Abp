import { APP_INITIALIZER, ɵɵdefineInjectable, Injectable, Injector, NgModule } from '@angular/core';
import { RoutesService, ConfigStateService } from '@abp/ng.core';
import { FormProp, EntityProp, EntityAction, ToolbarAction, ExtensionsService as ExtensionsService$1, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps } from '@abp/ng.theme.shared/extensions';
import { map, tap, mapTo } from 'rxjs/operators';
import { Subject } from 'rxjs';

// import { eThemesPolicyNames } from '../enums/policy-names';
const FORMMANAGEMENT_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routes) {
    let shortcut = {
        path: '/form-management',
        name: "FormManagement::FS.FormManagement" /* Form_management */,
        layout: "application" /* application */,
        parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
        iconClass: 'fa fa-folder-open',
        order: 6,
    };
    return () => {
        routes.add([
            shortcut
        ]);
    };
}

const DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.DocumentDefinition.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
        id: 'displayname',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'currentversionid',
        displayName: 'FormManagement::FS.DocumentDefinition.CurrentVersionId',
        id: 'currentversionid',
        defaultValue: "",
    }
]);

const DEFAULT_DOCUMENTDEFINITION_EDIT_FORM_PROPS = DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS;

const DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.DocumentDefinition.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.DocumentDefinition.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'currentversionid',
        displayName: 'FormManagement::FS.DocumentDefinition.CurrentVersionId',
        sortable: true,
        columnWidth: 100,
    }
]);

class ActionItem {
}
class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */]: new Subject(),
            ["FormManagement::FS.Formal" /* Formal */]: new Subject(),
            ["FormManagement::FS.Group" /* Group */]: new Subject(),
            ["FormManagement::FS.Item" /* Item */]: new Subject(),
            ["FormManagement::FS.Record" /* Record */]: new Subject(),
            ["FormManagement::FS.RecordItem" /* RecordItem */]: new Subject(),
            ["FormManagement::FS.Version" /* Version */]: new Subject(),
        };
    }
    action(type, data) {
        this.Actions$[type].next(data);
    }
}
ExtensionsService.ɵprov = ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
ExtensionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ExtensionsService.ctorParameters = () => [];

const ɵ0 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_DOCUMENTDEFINITION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1,
    },
]);

const ɵ0$1 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_DOCUMENTDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$1,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_FORMAL_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Formal.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'FormManagement::FS.Formal.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'versionid',
        displayName: 'FormManagement::FS.Formal.VersionId',
        id: 'versionid',
        defaultValue: "",
    }
]);

const DEFAULT_FORMAL_EDIT_FORM_PROPS = DEFAULT_FORMAL_CREATE_FORM_PROPS;

const DEFAULT_FORMAL_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Formal.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'FormManagement::FS.Formal.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'versionid',
        displayName: 'FormManagement::FS.Formal.VersionId',
        sortable: true,
        columnWidth: 150,
    },
]);

const ɵ0$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Formal" /* Formal */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Formal" /* Formal */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_FORMAL_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$2,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$1,
    },
]);

const ɵ0$3 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Formal" /* Formal */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_FORMAL_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$3,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_GROUP_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'code',
        displayName: 'FormManagement::FS.Group.Code',
        id: 'code',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'parentid',
        displayName: 'FormManagement::FS.Group.ParentId',
        id: 'parentid',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'level',
        displayName: 'FormManagement::FS.Group.Level',
        id: 'level',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.Group.DisplayName',
        id: 'displayname',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Group.FormalId',
        id: 'formalid',
        defaultValue: "",
    },
]);

const DEFAULT_GROUP_EDIT_FORM_PROPS = DEFAULT_GROUP_CREATE_FORM_PROPS;

const DEFAULT_GROUP_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'code',
        displayName: 'FormManagement::FS.Group.Code',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'parentid',
        displayName: 'FormManagement::FS.Group.ParentId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'level',
        displayName: 'FormManagement::FS.Group.Level',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayname',
        displayName: 'FormManagement::FS.Group.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Group.FormalId',
        sortable: true,
        columnWidth: 100,
    },
]);

const ɵ0$4 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Group" /* Group */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Group" /* Group */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_GROUP_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$4,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$2,
    },
]);

const ɵ0$5 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Group" /* Group */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_GROUP_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$5,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_ITEM_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Item.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'question',
        displayName: 'FormManagement::FS.Item.Question',
        id: 'question',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'groupid',
        displayName: 'FormManagement::FS.Item.GroupId',
        id: 'groupid',
        defaultValue: "",
    }
]);

const DEFAULT_ITEM_EDIT_FORM_PROPS = DEFAULT_ITEM_CREATE_FORM_PROPS;

const DEFAULT_ITEM_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Item.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'question',
        displayName: 'FormManagement::FS.Item.Question',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'groupid',
        displayName: 'FormManagement::FS.Item.GroupId',
        sortable: true,
        columnWidth: 100,
    }
]);

const ɵ0$6 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Item" /* Item */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$3 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Item" /* Item */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_ITEM_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$6,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$3,
    },
]);

const ɵ0$7 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Item" /* Item */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_ITEM_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$7,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_RECORD_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Record.FormalId',
        id: 'formalid',
        defaultValue: ""
    },
]);

const DEFAULT_RECORD_EDIT_FORM_PROPS = DEFAULT_RECORD_CREATE_FORM_PROPS;

const DEFAULT_RECORD_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'formalid',
        displayName: 'FormManagement::FS.Record.FormalId',
        sortable: true,
        columnWidth: 100,
    },
]);

const ɵ0$8 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Record" /* Record */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$4 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Record" /* Record */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_RECORD_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$8,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$4,
    },
]);

const ɵ0$9 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Record" /* Record */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_RECORD_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$9,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_RECORDITEM_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'asnwer',
        displayName: 'FormManagement::FS.RecordItem.Asnwer',
        id: 'asnwer',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'itemid',
        displayName: 'FormManagement::FS.RecordItem.ItemId',
        id: 'itemid',
        defaultValue: ""
    },
]);

const DEFAULT_RECORDITEM_EDIT_FORM_PROPS = DEFAULT_RECORDITEM_CREATE_FORM_PROPS;

const DEFAULT_RECORDITEM_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'asnwer',
        displayName: 'FormManagement::FS.RecordItem.Asnwer',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'itemid',
        displayName: 'FormManagement::FS.RecordItem.ItemId',
        sortable: true,
        columnWidth: 100,
    },
]);

const ɵ0$a = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$5 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_RECORDITEM_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$a,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$5,
    },
]);

const ɵ0$b = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_RECORDITEM_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$b,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_VERSION_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Version.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'prevversionid',
        displayName: 'FormManagement::FS.Version.PrevVersionId',
        id: 'prevversionid',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'nextversionid',
        displayName: 'FormManagement::FS.Version.NextVersionId',
        id: 'nextversionid',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'documentdefinitionid',
        displayName: 'FormManagement::FS.Version.DocumentDefinitionId',
        id: 'documentdefinitionid',
        defaultValue: "",
    },
]);

const DEFAULT_VERSION_EDIT_FORM_PROPS = DEFAULT_VERSION_CREATE_FORM_PROPS;

const DEFAULT_VERSION_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'FormManagement::FS.Version.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'prevversionid',
        displayName: 'FormManagement::FS.Version.PrevVersionId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'nextversionid',
        displayName: 'FormManagement::FS.Version.NextVersionId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'documentdefinitionid',
        displayName: 'FormManagement::FS.Version.DocumentDefinitionId',
        sortable: true,
        columnWidth: 100,
    },
]);

const ɵ0$c = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Version" /* Version */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$6 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Version" /* Version */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_VERSION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$c,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$6,
    },
]);

const ɵ0$d = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("FormManagement::FS.Version" /* Version */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_VERSION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$d,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const EXTENSIONS_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configure,
        deps: [Injector],
        multi: true,
    },
];
function configure(injector) {
    return () => {
        const extensions = injector.get(ExtensionsService$1);
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

class FormmanagementConfigModule {
    static forRoot() {
        return {
            ngModule: FormmanagementConfigModule,
            providers: [FORMMANAGEMENT_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS],
        };
    }
}
FormmanagementConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ActionItem, ExtensionsService, FORMMANAGEMENT_ROUTE_PROVIDERS, FormmanagementConfigModule, configureRoutes, FORMMANAGEMENT_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, EXTENSIONS_PROVIDERS as ɵc };
//# sourceMappingURL=fs-tw-form-management-config.js.map
