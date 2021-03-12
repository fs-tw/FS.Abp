import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutComponent, selectors: [["fs-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
    } }, directives: [i1.RouterOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.less']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=layout.component.js.map