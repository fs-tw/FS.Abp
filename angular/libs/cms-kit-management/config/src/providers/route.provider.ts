import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eCmsManagementPolicyNames } from '../enums/policy-names';
import { eCmsKitManagementRouteNames } from '../enums/route-names';

export const CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

const blogsModules=[
  {
    path: '/cms/blogs',
    name: eCmsKitManagementRouteNames.Blogs,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 1
  },
  {
    path: '/cms/blogs/blog',
    name: eCmsKitManagementRouteNames.Blogs+'.blog',
    parentName: eCmsKitManagementRouteNames.Blogs,
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 1
  },
  {
    path: '/cms/blogs/blog-posts',
    name: eCmsKitManagementRouteNames.Blogs+'.blog-posts',
    parentName: eCmsKitManagementRouteNames.Blogs,
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 2
  }
]

const commentsModels=[
  {
    path: '/cms/comments',
    name: eCmsKitManagementRouteNames.Comments,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 2
  },
  {
    path: '/cms/comments/comment',
    name: eCmsKitManagementRouteNames.Comments+'.comment',
    parentName: eCmsKitManagementRouteNames.Comments,
    requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 1
  },

];
const pagesModels=[
  {
    path: '/cms/pages',
    name: eCmsKitManagementRouteNames.Pages,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Pages,
    iconClass: 'fa fa-file-alt',
    order: 3
  },
  {
    path: '/cms/pages/page',
    name: eCmsKitManagementRouteNames.Pages+".page",
    parentName: eCmsKitManagementRouteNames.Pages,
    requiredPolicy: eCmsManagementPolicyNames.Pages,
    iconClass: 'fa fa-file-alt',
    order: 3
  },
];
const tagsModels=[
  {
    path: '/cms/tags',
    name: eCmsKitManagementRouteNames.Tags,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Tags,
    iconClass: 'fa fa-tags',
    order: 4
  },
  {
    path: '/cms/tags/tag',
    name: eCmsKitManagementRouteNames.Tags+'.tag',
    parentName: eCmsKitManagementRouteNames.Tags,
    requiredPolicy: eCmsManagementPolicyNames.Tags,
    iconClass: 'fa fa-tags',
    order: 1
  },
];

const vocabulariesModels=[
  {
    path: '/cms/vocabularies',
    name: eCmsKitManagementRouteNames.Vocabularies,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    //requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 6
  },
  {
    path: '/cms/vocabularies/vocabulary',
    name: eCmsKitManagementRouteNames.Vocabularies+'vocabulary',
    parentName: eCmsKitManagementRouteNames.Vocabularies,
    //requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 1
  }
]

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
      ...blogsModules,
      ...commentsModels,
      ...pagesModels,
      ...tagsModels,
      ...vocabulariesModels
     
    ]);
  };
}
