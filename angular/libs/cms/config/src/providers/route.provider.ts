import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eCmsRouteNames } from '../enums/route-names';
import { eCmsPolicyNames } from '../enums/policy-names';

export const CMS_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routes: RoutesService) {
  // let shortcut = {
  //   path: '/cms',
  //   name: eCmsRouteNames.Cms,
  //   layout: eLayoutType.application,
  //   parentName: eThemeSharedRouteNames.Administration,
  //   iconClass: 'fa fa-folder-open',
  //   order: 6,
  //   //requiredPolicy: eCmsPolicyNames.DirectoryDescriptor,
  // };

  let cmsRoute =  [
    {
      parentName: eThemeSharedRouteNames.Administration,
      path: '/cms',
      name: eCmsRouteNames.Cms,    
      iconClass: 'fa fa-bookmark',
      layout: eLayoutType.application,  
      order: 2,
      // requiredPolicy: 'FS.Cms.Menu.前台內容管理',
      navConfig:{
        name: eCmsRouteNames.Cms,
        title: eCmsRouteNames.Cms,
        doc: eCmsRouteNames.Cms
      }
    }
  ];

  let cmsBasicRoute = [
    {
      path: '/cms',
      name: eCmsRouteNames.Basic,
      parentName: eCmsRouteNames.Cms,
      iconClass: 'fa fa-id-card-o',
      layout: eLayoutType.application,
      order: 1    
    },
    {
      path: '/cms/post',
      name: eCmsRouteNames.Post,
      parentName: eCmsRouteNames.Basic,
      // requiredPolicy: 'FS.Cms.Menu.前台內容管理.最新消息管理',
      iconClass: 'fa fa-university',
      order: 1,
    },
    {
      path: '/cms/tag',
      name: eCmsRouteNames.Tag,
      parentName: eCmsRouteNames.Basic,
      iconClass: 'fa fa-university',
      order: 1,
    },
    {
      path: '/cms/tag/:tagId',
      name: eCmsRouteNames.Tag_detail,
      parentName: eCmsRouteNames.Tag,
      iconClass: 'fa fa-university',
      order: 1
    },
    {
      path: '/cms/post/detail',
      name: eCmsRouteNames.Post_Detail,
      parentName: eCmsRouteNames.Post,
      iconClass: 'fa fa-university',
      order: 1,
    },
    {
      path: '/cms/post/detail/:id',
      name: eCmsRouteNames.Post_Detail_Id,
      parentName: eCmsRouteNames.Post,
      iconClass: 'fa fa-university',
      order: 1,
    },
    // {
    //   path: '/cms/storage',
    //   name: eCmsRouteNames.Storage,
    //   parentName: eCmsRouteNames.Basic,
    //   requiredPolicy: 'FS.Cms.Menu.前台內容管理.檔案管理',
    //   iconClass: 'fa fa-university',
    //   order: 2,
    // },
  
  ]

  
  return () => {
    routes.add([
      ...cmsRoute,
      ...cmsBasicRoute
    ]);
  };
}
