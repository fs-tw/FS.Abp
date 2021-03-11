import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
import * as i1 from "../../ms.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
function MSPageSingleComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.title);
} }
function MSPageSingleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, MSPageSingleComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPageSingleComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.subTitle);
} }
function MSPageSingleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, MSPageSingleComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
} }
function MSPageSingleComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.extra);
} }
function MSPageSingleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, MSPageSingleComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.extra);
} }
const _c0 = function (a0) { return { "ms-page-single__wide": a0 }; };
const _c1 = ["*"];
export class MSPageSingleComponent {
    // #endregion
    constructor(brand) {
        this.brand = brand;
        // #region fileds
        this.wide = true;
        this.fixed = false;
    }
    ngOnInit() { }
    ngOnChanges() {
        this.brand.setFixed(this.fixed);
    }
    ngOnDestroy() {
        this.brand.setFixed(false);
    }
}
MSPageSingleComponent.ɵfac = function MSPageSingleComponent_Factory(t) { return new (t || MSPageSingleComponent)(i0.ɵɵdirectiveInject(i1.BrandService)); };
MSPageSingleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageSingleComponent, selectors: [["page-single"]], hostVars: 2, hostBindings: function MSPageSingleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ms-page-single", true);
    } }, inputs: { wide: "wide", fixed: "fixed", title: "title", subTitle: "subTitle", extra: "extra" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "ms-page-single__bar"], [1, "ms-page-single__wrap", 3, "ngClass"], [1, "ms-page-single__bar-desc"], ["class", "ms-page-single__bar-title", 4, "ngIf"], ["class", "ms-page-single__bar-sub-title", 4, "ngIf"], ["class", "ms-page-single__bar-extra", 4, "ngIf"], [1, "ms-page-single__wrap", "ms-page-single__body", 3, "ngClass"], [1, "ms-page-single__bar-title"], [4, "nzStringTemplateOutlet"], [1, "ms-page-single__bar-sub-title"], [1, "ms-page-single__bar-extra"]], template: function MSPageSingleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, MSPageSingleComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵtemplate(4, MSPageSingleComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, MSPageSingleComponent_div_5_Template, 2, 1, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵprojection(7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, ctx.wide));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.subTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extra);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.wide));
    } }, directives: [i2.NgClass, i2.NgIf, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageSingleComponent.prototype, "fixed", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageSingleComponent, [{
        type: Component,
        args: [{
                selector: 'page-single',
                templateUrl: './page-single.component.html',
                host: {
                    '[class.ms-page-single]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.BrandService }]; }, { wide: [{
            type: Input
        }], fixed: [{
            type: Input
        }], title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();
//# sourceMappingURL=page-single.component.js.map