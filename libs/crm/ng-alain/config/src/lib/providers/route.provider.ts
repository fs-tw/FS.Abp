import { eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eCrmRouteNames } from '../enums/route-names';
import { RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames} from '@abp/ng.theme.shared';

export const ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];
export const CrmCore = [
  {
    path: '/crm',
    parentName:eThemeSharedRouteNames.Administration,
    name: eCrmRouteNames.Crm,
    iconClass: 'fa fa-id-card-o',
    layout: eLayoutType.application,
    order: 0,
    navConfig: {
      title: eCrmRouteNames.Crm,
      doc: eCrmRouteNames.Crm,
      name: eCrmRouteNames.Crm,
    },
  },
];

export const CrmBasic = [
  {
    path: '/crm',
    name: eCrmRouteNames.CrmBase,
    parentName: eCrmRouteNames.Crm,
    order: 0,
    navConfig: {
      title: eCrmRouteNames.CrmBase,
    },
  },
];

export const Selectoroption = [
  {
    path: '/crm',
    name: eCrmRouteNames.SelectorOptions,
    parentName: eCrmRouteNames.Crm,
    order: 0,
    navConfig: {
      title: eCrmRouteNames.SelectorOptions,
    },
  },
  {
    path: '/crm/selector-options-management',
    name: eCrmRouteNames.SelectorOption_01,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 1,
    navConfig: {
      title: eCrmRouteNames.SelectorOption_01,
    },
  },
  {
    path: '/crm/cp-management',
    name: eCrmRouteNames.CpManagement,
    parentName: eCrmRouteNames.CrmBase,
    order: 1,
    navConfig: {
      title: eCrmRouteNames.CpManagement,
    },
  },
  {
    path: '/crm/customers',
    name: eCrmRouteNames.Customers,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 1,
    navConfig: {
      title: eCrmRouteNames.Customers,
    },
  },
  {
    path: '/crm/enterprise',
    name: eCrmRouteNames.Enterprise,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 2,
    navConfig: {
      title: eCrmRouteNames.Enterprise,
    },
  },
  {
    path: '/crm/employee',
    name: eCrmRouteNames.Employee,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 3,
    navConfig: {
      title: eCrmRouteNames.Employee,
    },
  },
  {
    path: '/crm/projects',
    name: eCrmRouteNames.Projects,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 4,
    navConfig: {
      title: eCrmRouteNames.Projects,
    },
  },
  {
    path: '/crm/counseling-recrod',
    name: eCrmRouteNames.ConsultationRecords,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 5,
    navConfig: {
      title: eCrmRouteNames.ConsultationRecords,
    },
  },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([...CrmCore, ...Selectoroption, ...CrmBasic]);
  };
}
