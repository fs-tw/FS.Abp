(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared/extensions'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/config', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared/extensions', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.config = {}), global.ng.core, global.ng_core, global.extensions, global.rxjs.operators, global.rxjs));
}(this, (function (exports, i0, ng_core, extensions, operators, rxjs) { 'use strict';

    // import { eThemesPolicyNames } from '../enums/policy-names';
    var THEME_ROUTE_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routes) {
        var shortcut = {
            path: '/theme',
            name: "Theme::Menu:Theme" /* Theme */,
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

    var DEFAULT_BANNER_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.Banner.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.Banner.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.Banner.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.Banner.Disable',
            id: 'disable',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'bannerconfig',
            displayName: 'Theme::FS.Banner.BannerConfig',
            id: 'bannerconfig',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'bannerdefinitionid',
            displayName: 'Theme::FS.Banner.BannerDefinitionId',
            id: 'bannerdefinitionid',
            defaultValue: "",
        },
    ]);

    var DEFAULT_BANNER_EDIT_FORM_PROPS = DEFAULT_BANNER_CREATE_FORM_PROPS;

    var DEFAULT_BANNER_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.Banner.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.Banner.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.Banner.Description',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.Banner.Disable',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'bannerconfig',
            displayName: 'Theme::FS.Banner.BannerConfig',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'bannerdefinitionid',
            displayName: 'Theme::FS.Banner.BannerDefinitionId',
            sortable: true,
            columnWidth: 150,
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
                _a["Theme::FS.Theme.Banner" /* Banner */] = new rxjs.Subject(),
                _a["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = new rxjs.Subject(),
                _a["Theme::FS.Theme.Route" /* Route */] = new rxjs.Subject(),
                _a["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = new rxjs.Subject(),
                _a["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = new rxjs.Subject(),
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

    var ɵ0$9 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Banner" /* Banner */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$4 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Banner" /* Banner */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_BANNER_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$9,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$4,
        },
    ]);

    var ɵ0$8 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Banner" /* Banner */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_BANNER_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$8,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.BannerDefinition.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.BannerDefinition.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.BannerDefinition.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.BannerDefinition.Disable',
            id: 'disable',
            defaultValue: "",
        }
    ]);

    var DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS = DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS;

    var DEFAULT_BANNERDEFINITION_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.BannerDefinition.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.BannerDefinition.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.BannerDefinition.Description',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.BannerDefinition.Disable',
            sortable: true,
            columnWidth: 150,
        }
    ]);

    var ɵ0$7 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$7,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$3,
        },
    ]);

    var ɵ0$6 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$6,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_ROUTE_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.Route.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.Route.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.Route.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.Route.Disable',
            id: 'disable',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'routeconfig',
            displayName: 'Theme::FS.Route.RouteConfig',
            id: 'routeconfig',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'routedefinitionid',
            displayName: 'Theme::FS.Route.RouteDefinitionId',
            id: 'routedefinitionid',
            defaultValue: "",
        },
    ]);

    var DEFAULT_ROUTE_EDIT_FORM_PROPS = DEFAULT_ROUTE_CREATE_FORM_PROPS;

    var DEFAULT_ROUTE_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.Route.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.Route.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.Route.Description',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.Route.Disable',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'routeconfig',
            displayName: 'Theme::FS.Route.RouteConfig',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'routedefinitionid',
            displayName: 'Theme::FS.Route.RouteDefinitionId',
            sortable: true,
            columnWidth: 150,
        }
    ]);

    var ɵ0$5 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Route" /* Route */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Route" /* Route */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_ROUTE_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$5,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$2,
        },
    ]);

    var ɵ0$4 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.Route" /* Route */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_ROUTE_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$4,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.RouteDefinition.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.RouteDefinition.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.RouteDefinition.Description',
            id: 'description',
            defaultValue: "",
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.RouteDefinition.Disable',
            id: 'disable',
            defaultValue: "",
        }
    ]);

    var DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS = DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS;

    var DEFAULT_ROUTEDEFINITION_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.RouteDefinition.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.RouteDefinition.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.RouteDefinition.Description',
            sortable: true,
            columnWidth: 150,
        },
        {
            type: "string" /* String */,
            name: 'disable',
            displayName: 'Theme::FS.RouteDefinition.Disable',
            sortable: true,
            columnWidth: 150,
        }
    ]);

    var ɵ0$3 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1$1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$3,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1$1,
        },
    ]);

    var ɵ0$2 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0$2,
            //permission: 'AbpIdentity.Users.Create',
            icon: 'fa fa-plus',
        },
    ]);

    var DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS = extensions.FormProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.WebSiteDefinition.No',
            id: 'no',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.WebSiteDefinition.DisplayName',
            id: 'displayName',
            defaultValue: ""
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.WebSiteDefinition.Description',
            id: 'description',
            defaultValue: "",
        }
    ]);

    var DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS = DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS;

    var DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS = extensions.EntityProp.createMany([
        {
            type: "string" /* String */,
            name: 'no',
            displayName: 'Theme::FS.WebSiteDefinition.No',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'displayName',
            displayName: 'Theme::FS.WebSiteDefinition.DisplayName',
            sortable: true,
            columnWidth: 100,
        },
        {
            type: "string" /* String */,
            name: 'description',
            displayName: 'Theme::FS.WebSiteDefinition.Description',
            sortable: true,
            columnWidth: 150,
        }
    ]);

    var ɵ0$1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
            name: 'Edit',
            record: data.record,
        });
    }, ɵ1 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
            name: 'Delete',
            record: data.record,
        });
    };
    var DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS = extensions.EntityAction.createMany([
        {
            text: 'AbpIdentity::Edit',
            action: ɵ0$1,
        },
        {
            text: 'AbpIdentity::Delete',
            action: ɵ1,
        },
    ]);

    var ɵ0 = function (data) {
        var service = data.getInjected(ExtensionsService);
        service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
            name: 'Add'
        });
        //const component = data.getInjected(UsersComponent);
        //component.add();
    };
    var DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS = extensions.ToolbarAction.createMany([
        {
            text: '新增',
            action: ɵ0,
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
            return extensions.getObjectExtensionEntitiesFromStore(configState, 'Theme')
                .pipe(operators.map(function (entities) { return ({}); }), extensions.mapEntitiesToContributors(configState, 'Theme'), operators.tap(function (objectExtensionContributors) {
                var _a, _b, _c, _d, _e;
                extensions.mergeWithDefaultActions(extensions$1.toolbarActions, (_a = {},
                    _a["Theme::FS.Theme.Banner" /* Banner */] = DEFAULT_BANNER_TOOLBAR_ACTIONS,
                    _a["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS,
                    _a["Theme::FS.Theme.Route" /* Route */] = DEFAULT_ROUTE_TOOLBAR_ACTIONS,
                    _a["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS,
                    _a["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS,
                    _a));
                extensions.mergeWithDefaultActions(extensions$1.entityActions, (_b = {},
                    _b["Theme::FS.Theme.Banner" /* Banner */] = DEFAULT_BANNER_ENTITY_ACTIONS,
                    _b["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS,
                    _b["Theme::FS.Theme.Route" /* Route */] = DEFAULT_ROUTE_ENTITY_ACTIONS,
                    _b["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS,
                    _b["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS,
                    _b));
                extensions.mergeWithDefaultProps(extensions$1.entityProps, (_c = {},
                    _c["Theme::FS.Theme.Banner" /* Banner */] = DEFAULT_BANNER_ENTITY_PROPS,
                    _c["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = DEFAULT_BANNERDEFINITION_ENTITY_PROPS,
                    _c["Theme::FS.Theme.Route" /* Route */] = DEFAULT_ROUTE_ENTITY_PROPS,
                    _c["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = DEFAULT_ROUTEDEFINITION_ENTITY_PROPS,
                    _c["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS,
                    _c));
                extensions.mergeWithDefaultProps(extensions$1.createFormProps, (_d = {},
                    _d["Theme::FS.Theme.Banner" /* Banner */] = DEFAULT_BANNER_CREATE_FORM_PROPS,
                    _d["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS,
                    _d["Theme::FS.Theme.Route" /* Route */] = DEFAULT_ROUTE_CREATE_FORM_PROPS,
                    _d["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS,
                    _d["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS,
                    _d));
                extensions.mergeWithDefaultProps(extensions$1.editFormProps, (_e = {},
                    _e["Theme::FS.Theme.Banner" /* Banner */] = DEFAULT_BANNER_EDIT_FORM_PROPS,
                    _e["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */] = DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS,
                    _e["Theme::FS.Theme.Route" /* Route */] = DEFAULT_ROUTE_EDIT_FORM_PROPS,
                    _e["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */] = DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS,
                    _e["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */] = DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS,
                    _e));
            }), operators.mapTo(true))
                .toPromise();
        };
    }

    var ThemeConfigModule = /** @class */ (function () {
        function ThemeConfigModule() {
        }
        ThemeConfigModule.forRoot = function () {
            return {
                ngModule: ThemeConfigModule,
                providers: [THEME_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS],
            };
        };
        return ThemeConfigModule;
    }());
    ThemeConfigModule.decorators = [
        { type: i0.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionItem = ActionItem;
    exports.ExtensionsService = ExtensionsService;
    exports.THEME_ROUTE_PROVIDERS = THEME_ROUTE_PROVIDERS;
    exports.ThemeConfigModule = ThemeConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = THEME_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;
    exports.ɵc = EXTENSIONS_PROVIDERS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-config.umd.js.map
