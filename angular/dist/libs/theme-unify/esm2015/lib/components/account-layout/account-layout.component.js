import { slideFromBottom } from '@abp/ng.theme.shared';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
export class AccountLayoutComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isCollapsed = false;
    }
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-layout-account',
                template: "<div class=\"account-header fixed-top p-3\"></div>\r\n<div class=\"d-flex align-items-center\" style=\"min-height: 100vh;\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n",
                animations: [slideFromBottom],
                encapsulation: ViewEncapsulation.None
            },] }
];
AccountLayoutComponent.ctorParameters = () => [
    { type: Renderer2 }
];
//# sourceMappingURL=account-layout.component.js.map