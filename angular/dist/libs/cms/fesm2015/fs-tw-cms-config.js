import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

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
            path: '/cms/post/:blogId/detail',
            name: "Cms::FS.Cms.PostDetail" /* Post_Detail */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            iconClass: 'fa fa-university',
            order: 1,
        },
        {
            path: '/cms/post/:blogId/detail/:postId',
            name: "Cms::FS.Cms.PostDetail.Id" /* Post_Detail_Id */,
            parentName: "Cms::FS.Cms.PostManagement" /* Post */,
            iconClass: 'fa fa-university',
            order: 1,
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
            providers: [CMS_ROUTE_PROVIDERS],
        };
    }
}
CmsConfigModule.ɵfac = function CmsConfigModule_Factory(t) { return new (t || CmsConfigModule)(); };
CmsConfigModule.ɵmod = ɵɵdefineNgModule({ type: CmsConfigModule });
CmsConfigModule.ɵinj = ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmsConfigModule, [{
        type: NgModule
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CMS_ROUTE_PROVIDERS, CmsConfigModule, configureRoutes };
//# sourceMappingURL=fs-tw-cms-config.js.map
