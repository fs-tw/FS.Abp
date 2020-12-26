import { Component } from '@angular/core';
import { NavItemsService } from '@abp/ng.theme.shared';
import { map } from 'rxjs/operators';
export class LayoutBasicComponent {
    constructor(navItems) {
        this.navItems = navItems;
        this.trackByFn = (_, element) => element === null || element === void 0 ? void 0 : element.id;
        this.options = {
            logoExpanded: `./assets/logo-full.svg`,
            logoCollapsed: `./assets/logo.svg`,
        };
        this.navItems$ = this.navItems.items$.pipe(map(x => x.map(y => y)));
    }
}
LayoutBasicComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-basic',
                template: "<layout-default [options]=\"options\" [asideUser]=\"asideUserTpl\" [content]=\"contentTpl\">\r\n    <ng-container *ngFor=\"let item of navItems$ | async; trackBy: trackByFn\">\r\n\r\n        <layout-default-header-item [direction]=\"item?.data?.direction || 'right'\">\r\n            <ng-container [ngComponentOutlet]=\"item.component\">\r\n            </ng-container>\r\n        </layout-default-header-item>\r\n\r\n    </ng-container>\r\n    <ng-template #asideUserTpl>\r\n\r\n    </ng-template>\r\n    <ng-template #contentTpl>\r\n        <router-outlet></router-outlet>\r\n    </ng-template>\r\n</layout-default>"
            },] }
];
LayoutBasicComponent.ctorParameters = () => [
    { type: NavItemsService }
];
//# sourceMappingURL=basic.component.js.map