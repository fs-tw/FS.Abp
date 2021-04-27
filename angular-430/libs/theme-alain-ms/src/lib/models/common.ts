import { ABP } from '@abp/ng.core';
import { MSServiceNavConfig, SidebarConfig } from '@fs-tw/theme-alain-ms/layout';

export namespace ThemeAlainMs {
    export interface FSRoute extends ABP.Route {
        navConfig?: MSServiceNavConfig;
        sidebarConfig?: SidebarConfig;
      }
}

