import { ɵɵdefineInjectable, Injectable, APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { ConfigStateService, RoutesService } from '@abp/ng.core';
import { FormProp, EntityProp, EntityAction, ToolbarAction, ExtensionsService as ExtensionsService$1, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps } from '@abp/ng.theme.shared/extensions';
import { map, tap, mapTo } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import { format } from 'date-fns';

const ɵ0 = (data) => {
    return data.record.no == "CmsBlogNotClassified";
};
const DEFAULT_BLOG_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "number" /* Number */,
        name: 'sequence',
        displayName: 'Cms::FS.Blog.Sequence',
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
        disabled: ɵ0
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
        displayName: 'Cms::FS.Blog.Url',
        id: 'url',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'listStyle',
        displayName: 'Cms::FS.Blog.ListStyle',
        id: 'listStyle',
        defaultValue: "",
    },
]);

const DEFAULT_BLOG_EDIT_FORM_PROPS = DEFAULT_BLOG_CREATE_FORM_PROPS;

const ɵ0$1 = (data) => {
    let text = "";
    if (data.record.disable)
        text = "是";
    else
        text = "否";
    return of(text);
};
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
        valueResolver: ɵ0$1,
    },
]);

class ActionItem {
}
class ExtensionsService {
    constructor() {
        this.Actions$ = {
            ["Cms::FS.Cms.Blogs" /* Blog */]: new Subject(),
            ["Cms::FS.Cms.PostManagement" /* Post */]: new Subject(),
            ["Cms::FS.Tag.Management" /* Tag */]: new Subject(),
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

const ɵ0$2 = (data) => {
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
}, ɵ2 = (data) => {
    return data.record.no != "CmsBlogNotClassified";
};
const DEFAULT_BLOG_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$2,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1,
        visible: ɵ2
        //permission: 'AbpIdentity.Users.Delete',
    },
]);

const ɵ0$3 = data => {
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
        action: ɵ0$3,
        //permission: 'AbpIdentity.Users.Create',
        icon: 'fa fa-plus',
    },
]);

const DEFAULT_POST_CREATE_FORM_PROPS = FormProp.createMany([
    {
        type: "string" /* String */,
        name: 'BlogId',
        displayName: 'Cms::FS.Post.BlogId',
        id: 'BlogId',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'Title',
        displayName: 'Cms::FS.Post.Title',
        id: 'Title',
        defaultValue: ""
    },
    {
        type: "string" /* String */,
        name: 'Subtitle',
        displayName: 'Cms::FS.Post.Subtitle',
        id: 'Subtitle',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'Url',
        displayName: 'Cms::FS.Post.Url',
        id: 'Url',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'Content',
        displayName: 'Cms::FS.Post.Content',
        id: 'Content',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'Disable',
        displayName: 'Cms::FS.Post.Disable',
        id: 'Disable',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'StartTime',
        displayName: 'Cms::FS.Post.StartTime',
        id: 'StartTime',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'EndTime',
        displayName: 'Cms::FS.Post.EndTime',
        id: 'EndTime',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'DisplayMode',
        displayName: 'Cms::FS.Post.DisplayMode',
        id: 'DisplayMode',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'Sequence',
        displayName: 'Cms::FS.Post.Sequence',
        id: 'Sequence',
        defaultValue: "",
    },
    {
        type: "string" /* String */,
        name: 'AttachmentFileUrls',
        displayName: 'Cms::FS.Post.AttachmentFileUrls',
        id: 'AttachmentFileUrls',
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

const ɵ0$4 = (data) => {
    let text = "";
    if (data.record.disable)
        text = "是";
    else
        text = "否";
    return of(text);
}, ɵ1$1 = (data) => {
    let text = "";
    if (data.record.displayMode == Fs.Cms.Posts.DisplayMode.內文)
        text = "內文";
    else
        text = "連結";
    return of(text);
}, ɵ2$1 = (data) => {
    let date = "";
    if (data.record.startTime)
        date = format(new Date(data.record.startTime), 'yyyy-MM-dd');
    return of(date);
}, ɵ3 = (data) => {
    let date = "";
    if (data.record.endTime)
        date = format(new Date(data.record.endTime), 'yyyy-MM-dd');
    return of(date);
};
const DEFAULT_POST_ENTITY_PROPS = EntityProp.createMany([
    // {
    //     type: ePropType.String,
    //     name: 'blogid',
    //     displayName: 'Cms::FS.Post.BlogId',
    //     sortable: true,
    //     columnWidth: 100,
    // },
    {
        type: "string" /* String */,
        name: 'disable',
        displayName: 'Cms::FS.Post.Disable',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ0$4,
    },
    {
        type: "string" /* String */,
        name: 'title',
        displayName: 'Cms::FS.Post.Title',
        sortable: true,
        columnWidth: 100,
    },
    // {
    //     type: ePropType.String,
    //     name: 'subtitle',
    //     displayName: 'Cms::FS.Post.Subtitle',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    // {
    //     type: ePropType.String,
    //     name: 'url',
    //     displayName: 'Cms::FS.Post.Url',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    // {
    //     type: ePropType.String,
    //     name: 'content',
    //     displayName: 'Cms::FS.Post.Content',
    //     sortable: true,
    //     columnWidth: 150,
    // },
    {
        type: "string" /* String */,
        name: 'displaymode',
        displayName: 'Cms::FS.Post.DisplayMode',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ1$1,
    },
    {
        type: "string" /* String */,
        name: 'starttime',
        displayName: 'Cms::FS.Post.StartTime',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ2$1,
    },
    {
        type: "string" /* String */,
        name: 'endtime',
        displayName: 'Cms::FS.Post.EndTime',
        sortable: true,
        columnWidth: 50,
        valueResolver: ɵ3,
    },
]);

const ɵ0$5 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.PostManagement" /* Post */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$2 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Cms.PostManagement" /* Post */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_POST_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$5,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$2,
    },
]);

const ɵ0$6 = data => {
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
        action: ɵ0$6,
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

const ɵ0$7 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Tag.Management" /* Tag */, {
        name: 'Edit',
        record: data.record,
    });
}, ɵ1$3 = (data) => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Tag.Management" /* Tag */, {
        name: 'Delete',
        record: data.record,
    });
};
const DEFAULT_TAG_ENTITY_ACTIONS = EntityAction.createMany([
    {
        text: 'AbpIdentity::Edit',
        action: ɵ0$7,
    },
    {
        text: 'AbpIdentity::Delete',
        action: ɵ1$3,
    },
]);

const ɵ0$8 = data => {
    const service = data.getInjected(ExtensionsService);
    service.action("Cms::FS.Tag.Management" /* Tag */, {
        name: 'Add'
    });
    //const component = data.getInjected(UsersComponent);
    //component.add();
};
const DEFAULT_TAG_TOOLBAR_ACTIONS = ToolbarAction.createMany([
    {
        text: '新增',
        action: ɵ0$8,
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
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_TOOLBAR_ACTIONS,
            });
            mergeWithDefaultActions(extensions.entityActions, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_ACTIONS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_ACTIONS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_ENTITY_ACTIONS,
            });
            mergeWithDefaultProps(extensions.entityProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_ENTITY_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_ENTITY_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_ENTITY_PROPS,
            });
            mergeWithDefaultProps(extensions.createFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_CREATE_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_CREATE_FORM_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_CREATE_FORM_PROPS,
            });
            mergeWithDefaultProps(extensions.editFormProps, {
                ["Cms::FS.Cms.Blogs" /* Blog */]: DEFAULT_BLOG_EDIT_FORM_PROPS,
                ["Cms::FS.Cms.PostManagement" /* Post */]: DEFAULT_POST_EDIT_FORM_PROPS,
                ["Cms::FS.Tag.Management" /* Tag */]: DEFAULT_TAG_EDIT_FORM_PROPS,
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
            requiredPolicy: "FS.Cms.Posts.Post" /* PostManagement */,
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
            requiredPolicy: "FS.Cms.Posts.Post" /* PostManagement */,
            iconClass: 'fa fa-university',
            order: 1,
        },
        {
            path: '/cms/post/detail',
            name: "Cms::FS.Cms.PostDetail" /* Post_Detail */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            requiredPolicy: "FS.Cms.Posts.Post" /* PostManagement */,
            iconClass: 'fa fa-university',
            order: 1
        },
        {
            path: '/cms/post/detail/:postId',
            name: "Cms::FS.Cms.PostDetail.Id" /* Post_Detail_Id */,
            requiredPolicy: "FS.Cms.Posts.Post" /* PostManagement */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            iconClass: 'fa fa-university',
            order: 1
        },
        {
            path: '/cms/tag',
            name: "Cms::FS.Tag.Management" /* Tag */,
            parentName: "Cms::FS.Cms.Basic" /* Basic */,
            iconClass: 'fa fa-university',
            requiredPolicy: "FS.Cms.Tags.Tag" /* TagManagement */,
            order: 1,
        },
        {
            path: '/cms/tag/:tagId',
            name: "FS.Tag.Management.Detail" /* Tag_detail */,
            parentName: "Cms::FS.Tag.Management" /* Tag */,
            requiredPolicy: "FS.Cms.Tags.Tag" /* TagManagement */,
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
