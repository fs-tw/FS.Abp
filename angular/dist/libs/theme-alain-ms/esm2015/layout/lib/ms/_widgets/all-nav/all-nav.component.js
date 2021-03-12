import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { BrandService } from '../../ms.service';
import { MSAllNavService } from './all-nav.service';
import * as i0 from "@angular/core";
import * as i1 from "./all-nav.service";
import * as i2 from "../../ms.service";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/spin";
import * as i6 from "../../shared/link-to/link-to.directive";
const _c0 = ["dropdown"];
function MSAllNavComponent_nz_spin_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-spin");
} }
const _c1 = function (a0) { return { "alain-ms__an-menu-item--active": a0 }; };
function MSAllNavComponent_ng_template_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("mouseenter", function MSAllNavComponent_ng_template_3_li_1_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r11); const i_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.mouseHandle(i_r9, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, i_r9.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r9.text, " ");
} }
function MSAllNavComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵtemplate(1, MSAllNavComponent_ng_template_3_li_1_Template, 3, 4, "li", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ls_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ls_r7);
} }
function MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r16.tip);
} }
function MSAllNavComponent_ng_template_5_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("linkToChanged", function MSAllNavComponent_ng_template_5_div_0_a_4_Template_a_linkToChanged_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19._leave(); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, MSAllNavComponent_ng_template_5_div_0_a_4_span_2_Template, 2, 1, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    i0.ɵɵproperty("link-to", i_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r16.text, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r16.tip);
} }
function MSAllNavComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "h3", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵtemplate(4, MSAllNavComponent_ng_template_5_div_0_a_4_Template, 3, 3, "a", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r14.text);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", p_r14.list);
} }
function MSAllNavComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MSAllNavComponent_ng_template_5_div_0_Template, 5, 2, "div", 12);
} if (rf & 2) {
    const ls_r12 = ctx.$implicit;
    i0.ɵɵproperty("ngForOf", ls_r12);
} }
function MSAllNavComponent_div_9_ng_template_3_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵlistener("linkToChanged", function MSAllNavComponent_div_9_div_4_a_1_Template_a_linkToChanged_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28._leave(); });
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "i", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r27 = ctx.$implicit;
    i0.ɵɵproperty("link-to", i_r27);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r27.text, " ");
} }
function MSAllNavComponent_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_4_a_1_Template, 3, 2, "a", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r22.data.navBottom);
} }
function MSAllNavComponent_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.data.bottomText);
} }
function MSAllNavComponent_div_9_div_6_ng_template_2_Template(rf, ctx) { }
const _c2 = function (a0) { return { "alain-ms__an-level2-active": a0 }; };
const _c3 = function (a0) { return { $implicit: a0 }; };
function MSAllNavComponent_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, MSAllNavComponent_div_9_div_6_ng_template_2_Template, 0, 0, "ng-template", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r30 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, p_r30.active));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, p_r30.children));
} }
function MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_ng_template_1_Template, 0, 0, "ng-template", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r36 = ctx.$implicit;
    i0.ɵɵnextContext(4);
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, col_r36.list));
} }
function MSAllNavComponent_div_9_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_div_1_Template, 2, 4, "div", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i_r32._left);
} }
function MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template(rf, ctx) { }
function MSAllNavComponent_div_9_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_2_ng_template_1_Template, 0, 0, "ng-template", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, i_r32.right));
} }
const _c4 = function (a0) { return { "alain-ms__an-content-active": a0 }; };
function MSAllNavComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtemplate(1, MSAllNavComponent_div_9_div_7_div_1_Template, 2, 1, "div", 35);
    i0.ɵɵtemplate(2, MSAllNavComponent_div_9_div_7_div_2_Template, 2, 4, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r32 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate2("alain-ms__an-content alain-ms__an-level", i_r32.level, "-content alain-ms__an-left-col-", i_r32.leftColumn, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c4, i_r32.active));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r32._left && i_r32._left.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r32.right && i_r32.right.length > 0);
} }
function MSAllNavComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵelementStart(2, "div", 22);
    i0.ɵɵtemplate(3, MSAllNavComponent_div_9_ng_template_3_Template, 0, 0, "ng-template", 23);
    i0.ɵɵtemplate(4, MSAllNavComponent_div_9_div_4_Template, 2, 1, "div", 24);
    i0.ɵɵtemplate(5, MSAllNavComponent_div_9_div_5_Template, 2, 1, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MSAllNavComponent_div_9_div_6_Template, 3, 7, "div", 26);
    i0.ɵɵtemplate(7, MSAllNavComponent_div_9_div_7_Template, 3, 9, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c3, ctx_r6.data.nav));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.navBottom);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.data.bottomText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.allL2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.allPanel);
} }
const ANT_TIMEOUT = 150;
/**
 * 顶部所有菜单组件，当单页布局模式时渲染
 */
export class MSAllNavComponent {
    constructor(srv, brandSrv, cdr, doc) {
        this.srv = srv;
        this.brandSrv = brandSrv;
        this.cdr = cdr;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.loading = false;
        this.$mouse = new Subject();
        this.open = false;
    }
    get allL2() {
        return this.srv.allL2;
    }
    get allPanel() {
        return this.srv.allPanel;
    }
    get validOpen() {
        return this.data && this.open;
    }
    handleOpen(status) {
        this.doc.body.classList[status ? 'add' : 'remove']('alain-ms__an-body');
        this.open = status;
        this.cdr.markForCheck();
        this.updateHeight().load();
    }
    load() {
        if (this.loading || this.data) {
            return;
        }
        this.loading = true;
        this.srv.getData().subscribe((res) => {
            this.data = res;
            this.cdr.markForCheck();
        });
    }
    updateHeight() {
        const height = window.innerHeight - this.brandSrv.topHeight;
        this.dropdownEl.nativeElement.style.height = `${height}px`;
        return this;
    }
    _enter() {
        if (!this.validOpen) {
            this.handleOpen(true);
        }
    }
    _leave() {
        this.handleOpen(false);
    }
    mouseHandle(i, status) {
        this.$mouse.next({ i, status });
    }
    handleMouse(i) {
        this.srv.refreshActive(i);
        this.cdr.detectChanges();
    }
    ngOnInit() {
        // this._enter();
        const { $mouse, unsubscribe$ } = this;
        $mouse
            .asObservable()
            .pipe(takeUntil(unsubscribe$), auditTime(ANT_TIMEOUT))
            .subscribe((res) => this.handleMouse(res.i));
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
MSAllNavComponent.ɵfac = function MSAllNavComponent_Factory(t) { return new (t || MSAllNavComponent)(i0.ɵɵdirectiveInject(i1.MSAllNavService), i0.ɵɵdirectiveInject(i2.BrandService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(DOCUMENT)); };
MSAllNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSAllNavComponent, selectors: [["ms-all-nav"]], viewQuery: function MSAllNavComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownEl = _t.first);
    } }, hostVars: 2, hostBindings: function MSAllNavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function MSAllNavComponent_mouseenter_HostBindingHandler() { return ctx._enter(); })("mouseleave", function MSAllNavComponent_mouseleave_HostBindingHandler() { return ctx._leave(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__an-active", ctx.validOpen);
    } }, decls: 10, vars: 2, consts: [[1, "alain-ms__an-trigger"], ["nz-icon", "", "nzType", "bars"], [4, "ngIf"], ["menuTpl", ""], ["categoryTpl", ""], [1, "alain-ms__an-dropdown"], ["dropdown", ""], ["class", "alain-ms__an", 4, "ngIf"], [1, "alain-ms__an-menu"], ["class", "alain-ms__an-menu-item", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-item", 3, "ngClass", "mouseenter"], ["nz-icon", "", "nzType", "right"], ["class", "alain-ms__an-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category"], [1, "alain-ms__an-category-title"], [1, "alain-ms__an-category-list"], ["class", "alain-ms__an-category-link", 3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-category-link", 3, "link-to", "linkToChanged"], ["class", "alain-ms__an-category-tip", 4, "ngIf"], [1, "alain-ms__an-category-tip"], [1, "alain-ms__an"], [1, "alain-ms__an-panel", "alain-ms__an-panel-active", "alain-ms__an-level1"], [1, "alain-ms__an-panel-inner"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "alain-ms__an-menu-bottom", 4, "ngIf"], ["class", "alain-ms__an-bottom", 4, "ngIf"], ["class", "alain-ms__an-panel alain-ms__an-level2", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-menu-bottom"], [3, "link-to", "linkToChanged", 4, "ngFor", "ngForOf"], [3, "link-to", "linkToChanged"], ["nz-icon", "", "nzType", "share-alt"], [1, "alain-ms__an-bottom"], [1, "alain-ms__an-panel", "alain-ms__an-level2", 3, "ngClass"], [3, "ngClass"], ["class", "alain-ms__an-left", 4, "ngIf"], ["class", "alain-ms__an-right", 4, "ngIf"], [1, "alain-ms__an-left"], ["class", "alain-ms__an-left-col", 4, "ngFor", "ngForOf"], [1, "alain-ms__an-left-col"], [1, "alain-ms__an-right"]], template: function MSAllNavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵtemplate(2, MSAllNavComponent_nz_spin_2_Template, 1, 0, "nz-spin", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, MSAllNavComponent_ng_template_3_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, MSAllNavComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(7, "div", 5, 6);
        i0.ɵɵtemplate(9, MSAllNavComponent_div_9_Template, 8, 8, "div", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.open && !ctx.data);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, directives: [i3.NzIconDirective, i4.NgIf, i5.NzSpinComponent, i4.NgForOf, i4.NgClass, i6.MSLinkToDirective, i4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSAllNavComponent, [{
        type: Component,
        args: [{
                selector: 'ms-all-nav',
                templateUrl: './all-nav.component.html',
                host: {
                    '[class.alain-ms__an-active]': 'validOpen',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.MSAllNavService }, { type: i2.BrandService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { dropdownEl: [{
            type: ViewChild,
            args: ['dropdown', { static: true }]
        }], _enter: [{
            type: HostListener,
            args: ['mouseenter']
        }], _leave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=all-nav.component.js.map