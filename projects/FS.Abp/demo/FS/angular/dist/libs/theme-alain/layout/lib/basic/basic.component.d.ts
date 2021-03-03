import { TrackByFunction } from '@angular/core';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { ABP } from '@abp/ng.core';
import { NavItemsService, NavItem as AbpNavItem } from '@abp/ng.theme.shared';
export declare class LayoutBasicComponent {
    readonly navItems: NavItemsService;
    trackByFn: TrackByFunction<NavItem>;
    options: LayoutDefaultOptions;
    navItems$: import("rxjs").Observable<NavItem[]>;
    constructor(navItems: NavItemsService);
}
export interface NavItem extends AbpNavItem {
    data: ABP.Dictionary<string>;
}
