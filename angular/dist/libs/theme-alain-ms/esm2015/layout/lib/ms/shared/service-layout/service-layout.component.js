import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
import * as i1 from "../../ms.service";
import * as i2 from "@angular/common";
import * as i3 from "../page-nav/page-nav.component";
function MSServiceLayoutComponent_page_nav_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "page-nav", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.navConfig)("list", ctx_r0.navList);
} }
const _c0 = function (a0) { return { "alain-ms__product-col-1": a0 }; };
const _c1 = function (a0) { return { "alain-ms__console": a0 }; };
const _c2 = ["*"];
export class MSServiceLayoutComponent {
    constructor(srv) {
        this.srv = srv;
        this.nav = false;
        this.navConfig = {};
        this.navList = [];
        this.hasConsoleCss = true;
    }
    get hideNav() {
        return this.srv.hideNav;
    }
}
MSServiceLayoutComponent.ɵfac = function MSServiceLayoutComponent_Factory(t) { return new (t || MSServiceLayoutComponent)(i0.ɵɵdirectiveInject(i1.BrandService)); };
MSServiceLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSServiceLayoutComponent, selectors: [["service-layout"]], inputs: { nav: "nav", navConfig: "navConfig", navList: "navList", hasConsoleCss: "hasConsoleCss" }, ngContentSelectors: _c2, decls: 5, vars: 7, consts: [[1, "alain-ms__product", 3, "ngClass"], [3, "config", "list", 4, "ngIf"], [1, "alain-ms__product-body", "scrollbar"], [3, "ngClass"], [3, "config", "list"]], template: function MSServiceLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MSServiceLayoutComponent_page_nav_1_Template, 1, 2, "page-nav", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx.nav && !ctx.hideNav));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nav);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx.hasConsoleCss));
    } }, directives: [i2.NgClass, i2.NgIf, i3.MSPageNavComponent], encapsulation: 2 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSServiceLayoutComponent.prototype, "nav", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSServiceLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'service-layout',
                templateUrl: './service-layout.component.html',
            }]
    }], function () { return [{ type: i1.BrandService }]; }, { nav: [{
            type: Input
        }], navConfig: [{
            type: Input
        }], navList: [{
            type: Input
        }], hasConsoleCss: [{
            type: Input
        }] }); })();
//# sourceMappingURL=service-layout.component.js.map