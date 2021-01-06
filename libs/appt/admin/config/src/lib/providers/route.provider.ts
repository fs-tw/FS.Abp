import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eApptRouteNames } from '../enums/route-names';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';

export const ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export const ApptRoutes = [
  {
    parentName: eThemeSharedRouteNames.Administration,
    path: '/appt',
    name: eApptRouteNames.Appt,
    iconClass: 'fa fa-bookmark',
    layout: eLayoutType.application,
    order: 2,
    //requiredPolicy: 'FS.Cms.Menu.前台內容管理',
    NavConfig:{
      name:eApptRouteNames.Appt,
      title:eApptRouteNames.Appt,
      doc: eApptRouteNames.Appt,
    }
  },
];

export const ApptBasicRoutes = [
  // {
  //   path: '/cms',
  //   name: eApptRouteNames.Basic,
  //   parentName: eApptRouteNames.Cms,
  //   iconClass: 'fa fa-id-card-o',
  //   layout: eLayoutType.application,
  //   order: 1,
  // },
  // {
  //   path: '/cms/post',
  //   name: eApptRouteNames.Post,
  //   parentName: eApptRouteNames.Basic,
  //   //requiredPolicy: 'FS.Cms.Menu.前台內容管理.最新消息管理',
  //   iconClass: 'fa fa-university',
  //   order: 1,
  // },
  // {
  //   path: '/cms/tag',
  //   name: eApptRouteNames.Tag,
  //   parentName: eApptRouteNames.Basic,
  //   iconClass: 'fa fa-university',
  //   order: 1,
  // }
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      ...ApptRoutes,
      ...ApptBasicRoutes,
      // ...ThemeManageMentBasicRoutes
    ]);
  };
}
