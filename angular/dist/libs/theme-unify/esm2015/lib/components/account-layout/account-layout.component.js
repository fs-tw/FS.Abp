import { slideFromBottom } from '@abp/ng.theme.shared';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AccountLayoutComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isCollapsed = false;
    }
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
AccountLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccountLayoutComponent, selectors: [["fs-layout-account"]], decls: 4, vars: 0, consts: [[1, "account-header", "fixed-top", "p-3"], [1, "d-flex", "align-items-center", 2, "min-height", "100vh"], [1, "container"]], template: function AccountLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterOutlet], encapsulation: 2, data: { animation: [slideFromBottom] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout-account',
                templateUrl: './account-layout.component.html',
                animations: [slideFromBottom],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=account-layout.component.js.map