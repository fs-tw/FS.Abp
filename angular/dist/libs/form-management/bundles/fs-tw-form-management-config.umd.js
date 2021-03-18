(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared/extensions'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/form-management/config', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared/extensions', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['form-management'] = global['fs-tw']['form-management'] || {}, global['fs-tw']['form-management'].config = {}), global.ng.core, global.ng_core, global.extensions, global.rxjs.operators, global.rxjs));
}(this, (function (exports, i0, ng_core, extensions, operators, rxjs) { 'use strict';

    // import { eThemesPolicyNames } from '../enums/policy-names';
    var FORMMANAGEMENT_ROUTE_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routes) {
        var shortcut = {
            path: '/form-management',
            name: "FormManagement::FS.FormManagement" /* Form_management */,
            layout: "application" /* application */,
            parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
            iconClass: 'fa fa-folder-open',
            order: 6,
        };
        return function () {
            routes.add([
                shortcut
            ]);
        };
    }

    var DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_DOCUMENTDEFINITION_EDIT_FORM_PROPS = DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS;

    var DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ActionItem = /** @class */ (function () {
        function ActionItem() {
        }
        return ActionItem;
    }());
    var ExtensionsService = /** @class */ (function () {
        function ExtensionsService() {
            var _a;
            this.Actions$ = (_a = {},
                _a["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = new rxjs.Subject(),
                _a["FormManagement::FS.Formal" /* Formal */] = new rxjs.Subject(),
                _a["FormManagement::FS.Group" /* Group */] = new rxjs.Subject(),
                _a["FormManagement::FS.Item" /* Item */] = new rxjs.Subject(),
                _a["FormManagement::FS.Record" /* Record */] = new rxjs.Subject(),
                _a["FormManagement::FS.RecordItem" /* RecordItem */] = new rxjs.Subject(),
                _a["FormManagement::FS.Version" /* Version */] = new rxjs.Subject(),
                _a);
        }
        ExtensionsService.prototype.action = function (type, data) {
            this.Actions$[type].next(data);
        };
        return ExtensionsService;
    }());
    ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
    ExtensionsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ExtensionsService.ctorParameters = function () { return []; };

    var ɵ0 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_DOCUMENTDEFINITION_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1,
        },
    ]);

    var ɵ0$1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.DocumentDefinition" /* DocumentDefinition */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_DOCUMENTDEFINITION_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$1,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_FORMAL_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_FORMAL_EDIT_FORM_PROPS = DEFAULT_FORMAL_CREATE_FORM_PROPS;

    var DEFAULT_FORMAL_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ɵ0$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Formal" /* Formal */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Formal" /* Formal */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_FORMAL_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$2,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$1,
        },
    ]);

    var ɵ0$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Formal" /* Formal */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_FORMAL_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$3,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_GROUP_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_GROUP_EDIT_FORM_PROPS = DEFAULT_GROUP_CREATE_FORM_PROPS;

    var DEFAULT_GROUP_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ɵ0$4 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Group" /* Group */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Group" /* Group */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_GROUP_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$4,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$2,
        },
    ]);

    var ɵ0$5 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Group" /* Group */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_GROUP_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$5,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_ITEM_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_ITEM_EDIT_FORM_PROPS = DEFAULT_ITEM_CREATE_FORM_PROPS;

    var DEFAULT_ITEM_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ɵ0$6 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Item" /* Item */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Item" /* Item */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_ITEM_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$6,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$3,
        },
    ]);

    var ɵ0$7 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Item" /* Item */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_ITEM_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$7,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_RECORD_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'formalid',
            displayName: 'FormManagement::FS.Record.FormalId',
            id: 'formalid',
            defaultValue: ""
        },
    ]);

    var DEFAULT_RECORD_EDIT_FORM_PROPS = DEFAULT_RECORD_CREATE_FORM_PROPS;

    var DEFAULT_RECORD_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'formalid',
            displayName: 'FormManagement::FS.Record.FormalId',
            sortable: true,
            columnWidth: 100,
        },
    ]);

    var ɵ0$8 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Record" /* Record */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$4 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Record" /* Record */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_RECORD_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$8,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$4,
        },
    ]);

    var ɵ0$9 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Record" /* Record */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_RECORD_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$9,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_RECORDITEM_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_RECORDITEM_EDIT_FORM_PROPS = DEFAULT_RECORDITEM_CREATE_FORM_PROPS;

    var DEFAULT_RECORDITEM_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ɵ0$a = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$5 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_RECORDITEM_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$a,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$5,
        },
    ]);

    var ɵ0$b = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.RecordItem" /* RecordItem */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_RECORDITEM_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$b,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_VERSION_CREATE_FORM_PROPS = extensions.FormProp.createMany([
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

    var DEFAULT_VERSION_EDIT_FORM_PROPS = DEFAULT_VERSION_CREATE_FORM_PROPS;

    var DEFAULT_VERSION_ENTITY_PROPS = extensions.EntityProp.createMany([
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

    var ɵ0$c = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Version" /* Version */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$6 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Version" /* Version */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_VERSION_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$c,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$6,
        },
    ]);

    var ɵ0$d = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("FormManagement::FS.Version" /* Version */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_VERSION_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$d,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var EXTENSIONS_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configure,
            deps: [i0.Injector],
            multi: true,
        },
    ];
    function configure(injector) {
        return function () {
            var extensions$1 = injector.get(extensions.ExtensionsService);
            var configState = injector.get(ng_core.ConfigStateService);
            return extensions.getObjectExtensionEntitiesFromStore(configState, 'Formmanagement')
                .pipe(operators.map(function (entities) { return ({}); }), extensions.mapEntitiesToContributors(configState, 'Formmanagement'), operators.tap(function (objectExtensionContributors) {
                var _a, _b, _c, _d, _e;
                extensions.mergeWithDefaultActions(extensions$1.toolbarActions, (_a = {},
                    _a["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = DEFAULT_DOCUMENTDEFINITION_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.Formal" /* Formal */] = DEFAULT_FORMAL_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.Group" /* Group */] = DEFAULT_GROUP_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.Item" /* Item */] = DEFAULT_ITEM_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.Record" /* Record */] = DEFAULT_RECORD_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.RecordItem" /* RecordItem */] = DEFAULT_RECORDITEM_TOOLBAR_ACTIONS,
                    _a["FormManagement::FS.Version" /* Version */] = DEFAULT_VERSION_TOOLBAR_ACTIONS,
                    _a));
                extensions.mergeWithDefaultActions(extensions$1.entityActions, (_b = {},
                    _b["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = DEFAULT_DOCUMENTDEFINITION_ENTITY_ACTIONS,
                    _b["FormManagement::FS.Formal" /* Formal */] = DEFAULT_FORMAL_ENTITY_ACTIONS,
                    _b["FormManagement::FS.Group" /* Group */] = DEFAULT_GROUP_ENTITY_ACTIONS,
                    _b["FormManagement::FS.Item" /* Item */] = DEFAULT_ITEM_ENTITY_ACTIONS,
                    _b["FormManagement::FS.Record" /* Record */] = DEFAULT_RECORD_ENTITY_ACTIONS,
                    _b["FormManagement::FS.RecordItem" /* RecordItem */] = DEFAULT_RECORDITEM_ENTITY_ACTIONS,
                    _b["FormManagement::FS.Version" /* Version */] = DEFAULT_VERSION_ENTITY_ACTIONS,
                    _b));
                extensions.mergeWithDefaultProps(extensions$1.entityProps, (_c = {},
                    _c["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = DEFAULT_DOCUMENTDEFINITION_ENTITY_PROPS,
                    _c["FormManagement::FS.Formal" /* Formal */] = DEFAULT_FORMAL_ENTITY_PROPS,
                    _c["FormManagement::FS.Group" /* Group */] = DEFAULT_GROUP_ENTITY_PROPS,
                    _c["FormManagement::FS.Item" /* Item */] = DEFAULT_ITEM_ENTITY_PROPS,
                    _c["FormManagement::FS.Record" /* Record */] = DEFAULT_RECORD_ENTITY_PROPS,
                    _c["FormManagement::FS.RecordItem" /* RecordItem */] = DEFAULT_RECORDITEM_ENTITY_PROPS,
                    _c["FormManagement::FS.Version" /* Version */] = DEFAULT_VERSION_ENTITY_PROPS,
                    _c));
                extensions.mergeWithDefaultProps(extensions$1.createFormProps, (_d = {},
                    _d["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = DEFAULT_DOCUMENTDEFINITION_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.Formal" /* Formal */] = DEFAULT_FORMAL_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.Group" /* Group */] = DEFAULT_GROUP_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.Item" /* Item */] = DEFAULT_ITEM_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.Record" /* Record */] = DEFAULT_RECORD_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.RecordItem" /* RecordItem */] = DEFAULT_RECORDITEM_CREATE_FORM_PROPS,
                    _d["FormManagement::FS.Version" /* Version */] = DEFAULT_VERSION_CREATE_FORM_PROPS,
                    _d));
                extensions.mergeWithDefaultProps(extensions$1.editFormProps, (_e = {},
                    _e["FormManagement::FS.DocumentDefinition" /* DocumentDefinition */] = DEFAULT_DOCUMENTDEFINITION_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.Formal" /* Formal */] = DEFAULT_FORMAL_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.Group" /* Group */] = DEFAULT_GROUP_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.Item" /* Item */] = DEFAULT_ITEM_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.Record" /* Record */] = DEFAULT_RECORD_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.RecordItem" /* RecordItem */] = DEFAULT_RECORDITEM_EDIT_FORM_PROPS,
                    _e["FormManagement::FS.Version" /* Version */] = DEFAULT_VERSION_EDIT_FORM_PROPS,
                    _e));
            }), operators.mapTo(true))
                .toPromise();
        };
    }

    var FormmanagementConfigModule = /** @class */ (function () {
        function FormmanagementConfigModule() {
        }
        FormmanagementConfigModule.forRoot = function () {
            return {
                ngModule: FormmanagementConfigModule,
                providers: [FORMMANAGEMENT_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS],
            };
        };
        return FormmanagementConfigModule;
    }());
    FormmanagementConfigModule.decorators = [
        { type: i0.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionItem = ActionItem;
    exports.ExtensionsService = ExtensionsService;
    exports.FORMMANAGEMENT_ROUTE_PROVIDERS = FORMMANAGEMENT_ROUTE_PROVIDERS;
    exports.FormmanagementConfigModule = FormmanagementConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = FORMMANAGEMENT_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;
    exports.ɵc = EXTENSIONS_PROVIDERS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-form-management-config.umd.js.map
