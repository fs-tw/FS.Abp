import { ɵɵdefineInjectable, Injectable, APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { ConfigStateService, RoutesService } from '@abp/ng.core';
import { FormProp, EntityProp, EntityAction, ToolbarAction, ExtensionsService as ExtensionsService$1, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps } from '@abp/ng.theme.shared/extensions';
import { map, tap, mapTo } from 'rxjs/operators';
import { Subject } from 'rxjs';

const DEFAULT_BLOG_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "number" /* Number */,
        name: 'sequence',
        displayName: 'Cms::FS.Blog.sequence',
        id: 'sequence',
        defaultValue: "",
    },
    //  {
    //   type: ePropType.String,
    //   name: 'no',
    //   displayName: 'Cms::FS.Blog.No',
    //   id: 'no',
    //   defaultValue: ""
    // },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Blog.DisplayName',
        id: 'displayName',
        defaultValue: "",
    },
    {
        type: "text" /* Text */,
        name: 'description',
        displayName: 'Cms::FS.Blog.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "boolean" /* Boolean */,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        id: 'disable',
        defaultValue: false,
    },
    {
        type: "string" /* String */,
        name: 'url',
        displayName: 'Cms::FS.Blog.url',
        id: 'url',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'listStyle',
        displayName: 'Cms::FS.Blog.listStyle',
        id: 'listStyle',
        defaultValue: "",
    },
]);

const DEFAULT_BLOG_EDIT_FORM_PROPS = DEFAULT_BLOG_CREATE_FORM_PROPS;

const DEFAULT_BLOG_ENTITY_PROPS = EntityProp.createMany([
    // {
    //     type: ePropType.String,
    //     name: 'no',
    //     displayName: 'Cms::FS.Blog.No',
    //     sortable: true,
    //     columnWidth: 100,
    // },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Blog.DisplayName',
        sortable: true,
        columnWidth: 50,
    },
    // {
    //     type: ePropType.String,
    //     name: 'description',
    //     displayName: 'Cms::FS.Blog.Description',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        sortable: true,
        columnWidth: 50,
    },
]);

class ActionItem {
}
class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["Cms::FS.Cms.Blogs" /* Blog */]: new Subject(),
            ["Cms::FS.Cms.PostManagement" /* Post */]: new Subject(),
            ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: new Subject(),
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
    service.action("Cms::FS.Cms.Blogs" /* Blog */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.Blogs" /* Blog */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_BLOG_ENTITY_ACTIONS = EntityAction.createMany([
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
    service.action("Cms::FS.Cms.Blogs" /* Blog */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_BLOG_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$1,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_POST_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'blogid',
        displayName: 'Cms::FS.Post.BlogId',
        id: 'blogid',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'title',
        displayName: 'Cms::FS.Post.Title',
        id: 'title',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'subtitle',
        displayName: 'Cms::FS.Post.Subtitle',
        id: 'subtitle',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'url',
        displayName: 'Cms::FS.Post.Url',
        id: 'url',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'content',
        displayName: 'Cms::FS.Post.Content',
        id: 'content',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Post.Disable',
        id: 'disable',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'startTime',
        displayName: 'Cms::FS.Post.StartTime',
        id: 'startTime',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'endTime',
        displayName: 'Cms::FS.Post.EndTime',
        id: 'endTime',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'displaymode',
        displayName: 'Cms::FS.Post.DisplayMode',
        id: 'displaymode',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'sequence',
        displayName: 'Cms::FS.Post.Sequence',
        id: 'sequence',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'attachmentfileurls',
        displayName: 'Cms::FS.Post.AttachmentFileUrls',
        id: 'attachmentfileurls',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'postimages',
        displayName: 'Cms::FS.Post.PostImages',
        id: 'postimages',
        defaultValue: "",
    },
]);

const DEFAULT_POST_EDIT_FORM_PROPS = DEFAULT_POST_CREATE_FORM_PROPS;

const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'blogid',
        displayName: 'Cms::FS.Post.BlogId',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'title',
        displayName: 'Cms::FS.Post.Title',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'subtitle',
        displayName: 'Cms::FS.Post.Subtitle',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'url',
        displayName: 'Cms::FS.Post.Url',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'content',
        displayName: 'Cms::FS.Post.Content',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Post.Disable',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'starttime',
        displayName: 'Cms::FS.Post.StartTime',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'endtime',
        displayName: 'Cms::FS.Post.EndTime',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'displaymode',
        displayName: 'Cms::FS.Post.DisplayMode',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'sequence',
        displayName: 'Cms::FS.Post.Sequence',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'attachmentfileurls',
        displayName: 'Cms::FS.Post.AttachmentFileUrls',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'postimages',
        displayName: 'Cms::FS.Post.PostImages',
        sortable: true,
        columnWidth: 150,
    }
]);

const ɵ0$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.PostManagement" /* Post */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$1 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.PostManagement" /* Post */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_POST_ENTITY_ACTIONS = EntityAction.createMany([
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
    service.action("Cms::FS.Cms.PostManagement" /* Post */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_POST_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$3,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_TAG_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Cms::FS.Tag.No',
        id: 'no',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Tag.DisplayName',
        id: 'displayName',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Cms::FS.Tag.Description',
        id: 'description',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Tag.Disable',
        id: 'disable',
        defaultValue: "",
    },
]);

const DEFAULT_TAG_EDIT_FORM_PROPS = DEFAULT_TAG_CREATE_FORM_PROPS;

const DEFAULT_TAG_ENTITY_PROPS = EntityProp.createMany([
    {
        type: "string" /* String */,
        name: 'no',
        displayName: 'Cms::FS.Tag.No',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'displayName',
        displayName: 'Cms::FS.Blog.DisplayName',
        sortable: true,
        columnWidth: 100,
    },
    {
        type: "string" /* String */,
        name: 'description',
        displayName: 'Cms::FS.Blog.Description',
        sortable: true,
        columnWidth: 150,
    },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Blog.Disable',
        sortable: true,
        columnWidth: 150,
    }
]);

const ɵ0$4 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_TAG_ENTITY_ACTIONS = EntityAction.createMany([
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
    service.action("\u6A19\u7C64\u7DAD\u8B77" /* Tag */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_TAG_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$5,
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
        return getObjectExtensionEntitiesFromStore(configState, 'Cms')
            .pipe(map((entities) => ({})), mapEntitiesToContributors(configState, 'Cms'), tap((objectExtensionContributors) => {
            mergeWithDefaultActions(extensions.toolbarActions, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_TOOLBAR_ACTIONS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_TOOLBAR_ACTIONS,
                ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: DEFAULT_TAG_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_ACTIONS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_ACTIONS,
                ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: DEFAULT_TAG_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_PROPS,
                ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: DEFAULT_TAG_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_CREATE_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_CREATE_FORM_PROPS,
                ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: DEFAULT_TAG_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_EDIT_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_EDIT_FORM_PROPS,
                ["\u6A19\u7C64\u7DAD\u8B77" /* Tag */]: DEFAULT_TAG_EDIT_FORM_PROPS,
            });
        }), mapTo(true))
            .toPromise();
    };
}

const CMS_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routes) {
    // let shortcut = {
    //   path: '/cms',
    //   name: eCmsRouteNames.Cms,
    //   layout: eLayoutType.application,
    //   parentName: eThemeSharedRouteNames.Administration,
    //   iconClass: 'fa fa-folder-open',
    //   order: 6,
    //   //requiredPolicy: eCmsPolicyNames.DirectoryDescriptor,
    // };
    let cmsRoute = [
        {
            parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
            path: '/cms',
            name: "Cms::FS.Cms.Core" /* Cms */,
            iconClass: 'fa fa-bookmark',
            layout: "application" /* application */,
            order: 2,
            // requiredPolicy: 'FS.Cms.Menu.前台內容管理',
            navConfig: {
                name: "Cms::FS.Cms.Core" /* Cms */,
                title: "Cms::FS.Cms.Core" /* Cms */,
                doc: "Cms::FS.Cms.Core" /* Cms */
            }
        }
    ];
    let cmsBasicRoute = [
        {
            path: '/cms',
            name: "Cms::FS.Cms.Basic" /* Basic */,
            parentName: "Cms::FS.Cms.Core" /* Cms */,
            iconClass: 'fa fa-id-card-o',
            layout: "application" /* application */,
            order: 1
        },
        {
            path: '/cms/post',
            name: "Cms::FS.Cms.PostManagement" /* Post */,
            parentName: "Cms::FS.Cms.Basic" /* Basic */,
            // requiredPolicy: 'FS.Cms.Menu.前台內容管理.最新消息管理',
            iconClass: 'fa fa-university',
            order: 1,
        },
        {
            path: '/cms/post/detail',
            name: "Cms::FS.Cms.PostDetail" /* Post_Detail */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            iconClass: 'fa fa-university',
            order: 1
        },
        {
            path: '/cms/post/detail/:postId',
            name: "Cms::FS.Cms.PostDetail.Id" /* Post_Detail_Id */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            iconClass: 'fa fa-university',
            order: 1
        },
        {
            path: '/cms/tag',
            name: "\u6A19\u7C64\u7DAD\u8B77" /* Tag */,
            parentName: "Cms::FS.Cms.Basic" /* Basic */,
            iconClass: 'fa fa-university',
            order: 1,
        },
        {
            path: '/cms/tag/:tagId',
            name: "\u6A19\u7C64\u8A73\u7D30" /* Tag_detail */,
            parentName: "\u6A19\u7C64\u7DAD\u8B77" /* Tag */,
            iconClass: 'fa fa-university',
            order: 1
        },
    ];
    return () => {
        routes.add([
            ...cmsRoute,
            ...cmsBasicRoute
        ]);
    };
}

class CmsConfigModule {
    static forRoot() {
        return {
            ngModule: CmsConfigModule,
            providers: [CMS_ROUTE_PROVIDERS, EXTENSIONS_PROVIDERS,],
        };
    }
}
CmsConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ActionItem, CMS_ROUTE_PROVIDERS, CmsConfigModule, ExtensionsService, configureRoutes, CMS_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, EXTENSIONS_PROVIDERS as ɵc };
//# sourceMappingURL=fs-tw-cms-config.js.map
