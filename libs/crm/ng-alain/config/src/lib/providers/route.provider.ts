import { eLayoutType } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eCrmRouteNames } from '../enums/route-names';
import { RoutesService } from '@abp/ng.core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export const CrmCore = [
  {
    path: '/crm',
    name: eCrmRouteNames.Crm,
    iconClass: 'fa fa-id-card-o',
    layout: eLayoutType.application,
    parentName: eThemeSharedRouteNames.Administration,
    order: 0,
    profile: {
      title: eCrmRouteNames.Crm,
      doc: eCrmRouteNames.Crm,
      nav: { routeName: eCrmRouteNames.Crm }
    },
  }
];

export const CrmBasic = [
  {
    path: '/crm',
    name: eCrmRouteNames.CrmBase,
    parentName: eCrmRouteNames.Crm,
    order: 0,
    profile: {
      title: eCrmRouteNames.CrmBase,
    }
  },
  {
    path: '/crm/customers',
    name: eCrmRouteNames.Customers,
    parentName: eCrmRouteNames.CrmBase,
    order: 1,
    profile: {
      title: eCrmRouteNames.Customers,
    }
  },
  {
    path: '/crm/enterprise',
    name: eCrmRouteNames.Enterprise,
    parentName: eCrmRouteNames.CrmBase,
    order: 2,
    profile: {
      title: eCrmRouteNames.Enterprise,
    }
  },
  {
    path: '/crm/employee',
    name: eCrmRouteNames.Employee,
    parentName: eCrmRouteNames.CrmBase,
    order: 3,
    profile: {
      title: eCrmRouteNames.Employee,
    }
  },
  {
    path: '/crm/projects',
    name: eCrmRouteNames.Projects,
    parentName: eCrmRouteNames.CrmBase,
    order: 4,
    profile: {
      title: eCrmRouteNames.Projects,
    }
  },
  {
    path: '/crm/counseling-recrod',
    name: eCrmRouteNames.ConsultationRecords,
    parentName: eCrmRouteNames.CrmBase,
    order: 5,
    profile: {
      title: eCrmRouteNames.ConsultationRecords
    }
  }
]

export const Selectoroption = [
  {
    path: '/crm',
    name: eCrmRouteNames.SelectorOptions,
    parentName: eCrmRouteNames.Crm,
    order: 0,
    profile: {
      title: eCrmRouteNames.SelectorOptions,
    }
  },
  {
    path: '/crm/selector-options-management',
    name: eCrmRouteNames.SelectorOption_01,
    parentName: eCrmRouteNames.SelectorOptions,
    order: 1,
    profile: {
      title: eCrmRouteNames.SelectorOption_01,
    }
  },

]

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add(
      [...CrmCore, ...Selectoroption, ...CrmBasic,]
    );
  };
}
