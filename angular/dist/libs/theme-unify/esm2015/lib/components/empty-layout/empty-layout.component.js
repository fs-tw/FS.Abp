import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class EmptyLayoutComponent {
}
// required for dynamic component
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent.ɵfac = function EmptyLayoutComponent_Factory(t) { return new (t || EmptyLayoutComponent)(); };
EmptyLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmptyLayoutComponent, selectors: [["fs-layout-empty"]], decls: 1, vars: 0, template: function EmptyLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
    } }, directives: [i1.RouterOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout-empty',
                template: `
    <router-outlet></router-outlet>
  `,
            }]
    }], null, null); })();
//# sourceMappingURL=empty-layout.component.js.map