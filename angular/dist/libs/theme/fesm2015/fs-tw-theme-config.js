import { APP_INITIALIZER, ɵɵdefineInjectable, Injectable, Injector, NgModule } from '@angular/core';
import { RoutesService, ConfigStateService } from '@abp/ng.core';
import { FormProp, EntityProp, EntityAction, ToolbarAction, ExtensionsService as ExtensionsService$1, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps } from '@abp/ng.theme.shared/extensions';
import { map, tap, mapTo } from 'rxjs/operators';
import { Subject } from 'rxjs';

// import { eThemesPolicyNames } from '../enums/policy-names';
const THEME_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routes) {
    let shortcut = {
        path: '/theme',
        name: "Theme::Menu:Theme" /* Theme */,
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

const DEFAULT_BANNER_CREATE_FORM_PROPS = FormProp.createMany([
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

const DEFAULT_BANNER_EDIT_FORM_PROPS = DEFAULT_BANNER_CREATE_FORM_PROPS;

const DEFAULT_BANNER_ENTITY_PROPS = EntityProp.createMany([
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

class ActionItem {
}
class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["Theme::FS.Theme.Banner" /* Banner */]: new Subject(),
            ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: new Subject(),
            ["Theme::FS.Theme.Route" /* Route */]: new Subject(),
            ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: new Subject(),
            ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: new Subject(),
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

const ɵ0$9 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Banner" /* Banner */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$4 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Banner" /* Banner */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_BANNER_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$9,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$4,
    },
]);

const ɵ0$8 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Banner" /* Banner */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_BANNER_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$8,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
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

const DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS = DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS;

const DEFAULT_BANNERDEFINITION_ENTITY_PROPS = EntityProp.createMany([
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

const ɵ0$7 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$3 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$7,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$3,
    },
]);

const ɵ0$6 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.BannerDefinition" /* BannerDefinition */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$6,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_ROUTE_CREATE_FORM_PROPS = FormProp.createMany([
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

const DEFAULT_ROUTE_EDIT_FORM_PROPS = DEFAULT_ROUTE_CREATE_FORM_PROPS;

const DEFAULT_ROUTE_ENTITY_PROPS = EntityProp.createMany([
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

const ɵ0$5 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Route" /* Route */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Route" /* Route */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_ROUTE_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$5,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$2,
    },
]);

const ɵ0$4 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.Route" /* Route */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_ROUTE_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$4,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
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

const DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS = DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS;

const DEFAULT_ROUTEDEFINITION_ENTITY_PROPS = EntityProp.createMany([
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

const ɵ0$3 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$3,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$1,
    },
]);

const ɵ0$2 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.RouteDefinition" /* RouteDefinition */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$2,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS = FormProp.createMany([
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

const DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS = DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS;

const DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS = EntityProp.createMany([
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

const ɵ0$1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$1,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1,
    },
]);

const ɵ0 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0,
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
        return getObjectExtensionEntitiesFromStore(configState, 'Theme')
            .pipe(map((entities) => ({})), mapEntitiesToContributors(configState, 'Theme'), tap((objectExtensionContributors) => {
            mergeWithDefaultActions(extensions.toolbarActions, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_TOOLBAR_ACTIONS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_ENTITY_ACTIONS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_ENTITY_ACTIONS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_ENTITY_ACTIONS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_ENTITY_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_ENTITY_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_ENTITY_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_ENTITY_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_CREATE_FORM_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["Theme::FS.Theme.Banner" /* Banner */]: DEFAULT_BANNER_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.BannerDefinition" /* BannerDefinition */]: DEFAULT_BANNERDEFINITION_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.Route" /* Route */]: DEFAULT_ROUTE_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.RouteDefinition" /* RouteDefinition */]: DEFAULT_ROUTEDEFINITION_EDIT_FORM_PROPS,
                ["Theme::FS.Theme.WebSiteDefinition" /* WebSiteDefinition */]: DEFAULT_WEBSITEDEFINITION_EDIT_FORM_PROPS,
            });
        }), mapTo(true))
            .toPromise();
    };
}

class ThemeConfigModule {
    static forRoot() {
        return {
            ngModule: ThemeConfigModule,
            providers: [THEME_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS],
        };
    }
}
ThemeConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ActionItem, ExtensionsService, THEME_ROUTE_PROVIDERS, ThemeConfigModule, configureRoutes, THEME_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, EXTENSIONS_PROVIDERS as ɵc };
//# sourceMappingURL=fs-tw-theme-config.js.map
