import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { Reactions } from 'libs/cms-kit-management/proxy/cms-kit/src/volo/cms-kit/public';
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
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 1,
  },
  {
    path: '/cms-kit-management/blogs/blog',
    name: eCmsKitManagementRouteNames.Blogs + '.blog',
    parentName: eCmsKitManagementRouteNames.Blogs,
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
    order: 1,
  },
  {
    path: '/cms-kit-management/blogs/blog-post',
    name: eCmsKitManagementRouteNames.Blogs + '.blog-post',
    parentName: eCmsKitManagementRouteNames.Blogs,
    requiredPolicy: eCmsManagementPolicyNames.Blogs,
    iconClass: 'fa fa-blog',
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
  {
    path: '/cms-kit-management/comments/comment',
    name: eCmsKitManagementRouteNames.Comments + '.comment',
    parentName: eCmsKitManagementRouteNames.Comments,
    requiredPolicy: eCmsManagementPolicyNames.Comments,
    iconClass: 'fa fa-comments',
    order: 1,
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
  {
    path: '/cms-kit-management/pages/page',
    name: eCmsKitManagementRouteNames.Pages + '.page',
    parentName: eCmsKitManagementRouteNames.Pages,
    requiredPolicy: eCmsManagementPolicyNames.Pages,
    iconClass: 'fa fa-file-alt',
    order: 1,
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
  {
    path: '/cms-kit-management/tags/tag',
    name: eCmsKitManagementRouteNames.Tags + '.tag',
    parentName: eCmsKitManagementRouteNames.Tags,
    requiredPolicy: eCmsManagementPolicyNames.Tags,
    iconClass: 'fa fa-tags',
    order: 1,
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
  {
    path: '/cms-kit-management/ratings/rating',
    name: eCmsKitManagementRouteNames.Ratings + '.rating',
    parentName: eCmsKitManagementRouteNames.Ratings,
    iconClass: 'fa fa-file-alt',
    order: 1,
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
  {
    path: '/cms-kit-management/reactions/reaction',
    name: eCmsKitManagementRouteNames.Reactions + '.reaction',
    parentName: eCmsKitManagementRouteNames.Reactions,
    iconClass: 'fa fa-file-alt',
    order: 1,
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
  {
    path: '/cms-kit-management/media-descriptors/media-descriptor',
    name: eCmsKitManagementRouteNames.MediaDescriptors + '.media-descriptor',
    parentName: eCmsKitManagementRouteNames.MediaDescriptors,
    iconClass: 'fa fa-file-alt',
    order: 1,
  },
];
const menusModels = [
  {
    path: '/cms-kit-management/menus',
    name: eCmsKitManagementRouteNames.Menus,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 7,
  },
  {
    path: '/cms-kit-management/menus/menu',
    name: eCmsKitManagementRouteNames.Menus + '.menu',
    parentName: eCmsKitManagementRouteNames.Menus,
    iconClass: 'fa fa-file-alt',
    order: 1,
  },
];
const contentsModels = [
  {
    path: '/cms-kit-management/contents',
    name: eCmsKitManagementRouteNames.Contents,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 8,
  },
  {
    path: '/cms-kit-management/contents/content',
    name: eCmsKitManagementRouteNames.Contents + '.content',
    parentName: eCmsKitManagementRouteNames.Contents,
    iconClass: 'fa fa-file-alt',
    order: 1,
  },
];
const shapesModels = [
  {
    path: '/cms-kit-management/shapes',
    name: eCmsKitManagementRouteNames.Shapes,
    parentName: eCmsKitManagementRouteNames.CmsKitManagement,
    iconClass: 'fa fa-file-alt',
    order: 8,
  },
  {
    path: '/cms-kit-management/shapes/shape',
    name: eCmsKitManagementRouteNames.Shapes + '.shape',
    parentName: eCmsKitManagementRouteNames.Shapes,
    iconClass: 'fa fa-file-alt',
    order: 1,
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
        }
      } as any,
      ...blogsModules,
      ...commentsModels,
      ...pagesModels,
      ...tagsModels,
      ...ratingsModels,
      ...reactionsModels,
      ...mediaDescriptorsModels,
      ...menusModels,
      ...contentsModels,
      ...shapesModels
    ]);
  };
}
