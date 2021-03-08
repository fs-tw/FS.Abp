import { ABP } from '@abp/ng.core';
import { MSServiceNavConfig, SidebarConfig } from './layout';


export interface FSRoute extends ABP.Route {
  navConfig?: MSServiceNavConfig;
  sidebarConfig?: SidebarConfig;
}
