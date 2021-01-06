import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eCmsRouteNames } from '../enums/route-names';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';

export const ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export const CmsRoutes = [
  {
    parentName: eThemeSharedRouteNames.Administration,
    path: '/cms',
    name: eCmsRouteNames.Cms,
    iconClass: 'fa fa-bookmark',
    layout: eLayoutType.application,
    order: 2,
    requiredPolicy: 'FS.Cms.Menu.前台內容管理',
    profile: {
      title: eCmsRouteNames.Cms,
      doc: eCmsRouteNames.Cms,
      nav: { routeName: eCmsRouteNames.Cms },
    },
  },
];

export const CmsBasicRoutes = [
  {
    path: '/cms',
    name: eCmsRouteNames.Basic,
    parentName: eCmsRouteNames.Cms,
    iconClass: 'fa fa-id-card-o',
    layout: eLayoutType.application,
    order: 1,
  },
  {
    path: '/cms/post',
    name: eCmsRouteNames.Post,
    parentName: eCmsRouteNames.Basic,
    //requiredPolicy: 'FS.Cms.Menu.前台內容管理.最新消息管理',
    iconClass: 'fa fa-university',
    order: 1,
  },
  {
    path: '/cms/tag',
    name: eCmsRouteNames.Tag,
    parentName: eCmsRouteNames.Basic,
    iconClass: 'fa fa-university',
    order: 1,
  }
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      ...CmsRoutes,
      ...CmsBasicRoutes,
      // ...ThemeManageMentBasicRoutes
    ]);
  };
}
