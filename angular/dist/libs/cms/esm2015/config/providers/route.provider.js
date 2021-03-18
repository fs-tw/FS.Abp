import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const CMS_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
export function configureRoutes(routes) {
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
//# sourceMappingURL=route.provider.js.map