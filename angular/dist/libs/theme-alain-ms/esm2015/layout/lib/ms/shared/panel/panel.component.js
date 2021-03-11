import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
function MSPanelComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
function MSPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, MSPanelComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPanelComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.extra);
} }
function MSPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, MSPanelComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.extra);
} }
const _c0 = ["*"];
export class MSPanelComponent {
}
MSPanelComponent.ɵfac = function MSPanelComponent_Factory(t) { return new (t || MSPanelComponent)(); };
MSPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPanelComponent, selectors: [["panel"]], hostVars: 2, hostBindings: function MSPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ms-panel", true);
    } }, inputs: { title: "title", extra: "extra" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "ms-panel__hd"], ["class", "ms-panel__hd-title", 4, "ngIf"], ["class", "ms-panel__hd-extra", 4, "ngIf"], [1, "ms-panel__bd"], [1, "ms-panel__hd-title"], [4, "nzStringTemplateOutlet"], [1, "ms-panel__hd-extra"]], template: function MSPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MSPanelComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵtemplate(2, MSPanelComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extra);
    } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPanelComponent, [{
        type: Component,
        args: [{
                selector: 'panel',
                templateUrl: './panel.component.html',
                host: {
                    '[class.ms-panel]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { title: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();
//# sourceMappingURL=panel.component.js.map