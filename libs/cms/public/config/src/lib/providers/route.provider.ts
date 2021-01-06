import { eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eFcmRouteNames } from '../enums/route-names';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { WrapRoutesService } from '@fs-tw/theme-core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [WrapRoutesService], multi: true },
];


export const CmsRoutes = [
  {
    path: '/cms',
    name: eFcmRouteNames.Cms,
    iconClass: 'fa fa-id-card-o',
    layout: eLayoutType.application,
    order: 2,
    profile: {
      title: '我的商家管理',
      doc: '我的商家管理',      
      nav: { routeName: eFcmRouteNames.Cms, }
    },
  }
]


export const BasicRoutes = [ 
  {
    path: '/news',
    name: eFcmRouteNames.new,
    iconClass: 'fa fa-id-card-o',
    parentName: eFcmRouteNames.Cms,
    layout: eLayoutType.application,
    order: 1,   
  },    
]


function configureRoutes(routes: WrapRoutesService) {
  return () => {
    routes.Proxy.add([
      ...BasicRoutes,
      ...CmsRoutes,
      // ...FcmBasicRoutes,
      // ...FcmMerchantsRoutes
    ]);
  };
}
