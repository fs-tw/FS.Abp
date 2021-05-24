import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eCmsManagementPolicyNames } from '../enums/policy-names';
import { eCmsKitManagementRouteNames } from '../enums/route-names';

export const CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/cms',
        name: eCmsKitManagementRouteNames.CmsKitManagement,
        parentName: eThemeSharedRouteNames.Administration,
        requiredPolicy: eCmsManagementPolicyNames.CmsKitManagement,
        layout: eLayoutType.application,
        iconClass: 'far fa-newspaper',
        order: -1
      },
      {
        path: '/cms/pages',
        name: eCmsKitManagementRouteNames.Pages,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        requiredPolicy: eCmsManagementPolicyNames.Pages,
        iconClass: 'fa fa-file-alt',
        order: 1
      },
      {
        path: '/cms/blogs',
        name: eCmsKitManagementRouteNames.Blogs,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        requiredPolicy: eCmsManagementPolicyNames.Blogs,
        iconClass: 'fa fa-blog',
        order: 2
      },
      {
        path: '/cms/blog-posts',
        name: eCmsKitManagementRouteNames.BlogPosts,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        requiredPolicy: eCmsManagementPolicyNames.BlogPosts,
        iconClass: 'fa fa-file-signature',
        order: 3
      },
      {
        path: '/cms/tags',
        name: eCmsKitManagementRouteNames.Tags,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        requiredPolicy: eCmsManagementPolicyNames.Tags,
        iconClass: 'fa fa-tags',
        order: 4
      },
      {
        path: '/cms/comments',
        name: eCmsKitManagementRouteNames.Comments,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        requiredPolicy: eCmsManagementPolicyNames.Comments,
        iconClass: 'fa fa-comments',
        order: 5
      },
      {
        path: '/cms/vocabularies',
        name: eCmsKitManagementRouteNames.Vocabularies,
        parentName: eCmsKitManagementRouteNames.CmsKitManagement,
        //requiredPolicy: eCmsManagementPolicyNames.Comments,
        iconClass: 'fa fa-comments',
        order: 6
      }
    ]);
  };
}
