import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eCmsManagementPolicyNames } from '../enums/policy-names';
import { eCmsKitManagementRouteNames } from '../enums/route-names';

export const CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

const blogsModules = [
  {
    path: '/cms-kit-management/blogs',
    name: eCmsKitManagementRouteNames.Blogs,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-blog',
    order: 1,
  },
  {
    path: '/cms-kit-management/blogs/blogs',
    name: eCmsKitManagementRouteNames.BlogsBlogs,
    parentName: eCmsKitManagementRouteNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 1,
  },
  {
    path: '/cms-kit-management/blogs/blog-management/blog-post',
    name: eCmsKitManagementRouteNames.BlogPosts,
    parentName: eCmsKitManagementRouteNames.Blogs,
    iconClass: 'fa fa-newspaper',
    order: 2,
  },
];

const commentsModels = [
  {
    path: '/cms-kit-management/comments',
    name: eCmsKitManagementRouteNames.Comments,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 2,
  },
];
const pagesModels = [
  {
    path: '/cms-kit-management/pages',
    name: eCmsKitManagementRouteNames.Pages,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Pages,
    iconClass: 'fa fa-file-alt',
    order: 3,
  },
];
const tagsModels = [
  {
    path: '/cms-kit-management/tags',
    name: eCmsKitManagementRouteNames.Tags,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    requiredPolicy: eCmsManagementPolicyNames.Tags,
    iconClass: 'fa fa-tags',
    order: 4,
  },
];
const ratingsModels = [
  {
    path: '/cms-kit-management/ratings',
    name: eCmsKitManagementRouteNames.Ratings,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 5,
  },
];
const reactionsModels = [
  {
    path: '/cms-kit-management/reactions',
    name: eCmsKitManagementRouteNames.Reactions,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 6,
  },
];
const mediaDescriptorsModels = [
  {
    path: '/cms-kit-management/media-descriptors',
    name: eCmsKitManagementRouteNames.MediaDescriptors,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 7,
  },
];
const menusModels = [
  {
    path: '/cms-kit-management/menus',
    name: eCmsKitManagementRouteNames.Menus,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 8,
  },
];
const contentsModels = [
  {
    path: '/cms-kit-management/contents',
    name: eCmsKitManagementRouteNames.Contents,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 9,
  },
];
const shapesModels = [
  {
    path: '/cms-kit-management/shapes',
    name: eCmsKitManagementRouteNames.Shapes,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 10,
  },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/cms-kit-management',
        name: eCmsKitManagementRouteNames.CmsKitManagement,
        parentName: eThemeSharedRouteNames.Administration,
        requiredPolicy: eCmsManagementPolicyNames.CmsKitManagement,
        layout: eLayoutType.application,
        iconClass: 'far fa-newspaper',
        order: -1,
        navConfig: {
          name: eCmsKitManagementRouteNames.CmsKitManagement,
        },
      } as any,
      ...blogsModules,
      // ...commentsModels,
      // ...pagesModels,
      // ...tagsModels,
      // ...ratingsModels,
      // ...reactionsModels,
      // ...mediaDescriptorsModels,
      // ...menusModels,
      // ...contentsModels,
      // ...shapesModels
    ]);
  };
}
