import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MSRegionService } from './region.service';
import * as i0 from "@angular/core";
import * as i1 from "./region.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = function (a0) { return { "brand-color": a0 }; };
function MSRegionComponent_ng_container_0_dl_7_dd_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "dd", 9);
    i0.ɵɵlistener("click", function MSRegionComponent_ng_container_0_dl_7_dd_3_Template_dd_click_0_listener() { i0.ɵɵrestoreView(_r6); const i_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.selected(i_r4); });
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵelement(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, i_r4.selected));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("icon icon-", i_r4.country, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i_r4.name, " ");
} }
function MSRegionComponent_ng_container_0_dl_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl", 6);
    i0.ɵɵelementStart(1, "dt", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MSRegionComponent_ng_container_0_dl_7_dd_3_Template, 4, 7, "dd", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", p_r2.list);
} }
function MSRegionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span", 2);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4);
    i0.ɵɵtemplate(7, MSRegionComponent_ng_container_0_dl_7_Template, 4, 2, "dl", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("icon icon-", ctx_r0.srv.item.country, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.srv.item.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.srv.list);
} }
export class MSRegionComponent {
    constructor(srv, cdr) {
        this.srv = srv;
        this.cdr = cdr;
        this.inited = false;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.cdr.detectChanges();
        });
    }
    selected(item) {
        this.srv.setSelected(item);
        this.cdr.detectChanges();
    }
}
MSRegionComponent.ɵfac = function MSRegionComponent_Factory(t) { return new (t || MSRegionComponent)(i0.ɵɵdirectiveInject(i1.MSRegionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MSRegionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSRegionComponent, selectors: [["ms-region"]], hostVars: 6, hostBindings: function MSRegionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__region", true);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "alain-ms__topbar-item-btn"], [1, "text-xs", "px-xs"], ["nz-icon", "", "nzType", "caret-up", 1, "alain-ms__topbar-item-btn-arrow"], [1, "alain-ms__topbar-dd-menu", "alain-ms__topbar-dd-left", "alain-ms__region--wrap", "clearfix"], ["class", "alain-ms__region--list", 4, "ngFor", "ngForOf"], [1, "alain-ms__region--list"], [1, "mb-sm"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "d-block", 3, "ngClass"]], template: function MSRegionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MSRegionComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.inited);
    } }, directives: [i2.NgIf, i3.NzIconDirective, i2.NgForOf, i2.NgClass], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSRegionComponent, [{
        type: Component,
        args: [{
                selector: 'ms-region',
                templateUrl: './region.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__region]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.MSRegionService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=region.component.js.map