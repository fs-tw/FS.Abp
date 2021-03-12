import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../ms.service";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "@abp/ng.core";
function MSPageBarComponent_h2_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r2.title));
} }
function MSPageBarComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 4);
    i0.ɵɵtemplate(1, MSPageBarComponent_h2_1_ng_container_1_Template, 3, 3, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.title);
} }
function MSPageBarComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.subTitle));
} }
function MSPageBarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, MSPageBarComponent_div_2_ng_container_1_Template, 3, 3, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.subTitle);
} }
const _c0 = ["*"];
export class MSPageBarComponent {
    // #endregion
    constructor(router, srv, menuSrv, cdr) {
        this.router = router;
        this.srv = srv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._menus = null;
        // #region fields
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        this.recursiveBreadcrumb = true;
    }
    get menus() {
        if (this._menus) {
            return this._menus;
        }
        this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
        return this._menus;
    }
    setTitle() {
        if (typeof this.title === 'undefined' && this.autoTitle && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            this.title = item.text;
        }
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.router$ = merge(this.router.events.pipe(filter((e) => e instanceof NavigationEnd)), this.srv.notify, this.menuSrv.change).subscribe(() => {
            this._menus = null;
            this.setTitle();
        });
    }
    ngOnDestroy() {
        this.router$.unsubscribe();
    }
}
MSPageBarComponent.ɵfac = function MSPageBarComponent_Factory(t) { return new (t || MSPageBarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.BrandService), i0.ɵɵdirectiveInject(i3.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MSPageBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageBarComponent, selectors: [["page-bar"]], hostVars: 2, hostBindings: function MSPageBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ms-page-bar", true);
    } }, inputs: { autoTitle: "autoTitle", recursiveBreadcrumb: "recursiveBreadcrumb", title: "title", subTitle: "subTitle" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "ms-page-bar__title"], ["class", "ms-page-bar__title-main", 4, "ngIf"], ["class", "ms-page-bar__title-sub", 4, "ngIf"], [1, "ms-page-bar__action"], [1, "ms-page-bar__title-main"], [4, "nzStringTemplateOutlet"], [1, "ms-page-bar__title-sub"]], template: function MSPageBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MSPageBarComponent_h2_1_Template, 2, 1, "h2", 1);
        i0.ɵɵtemplate(2, MSPageBarComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.subTitle);
    } }, directives: [i4.NgIf, i5.NzStringTemplateOutletDirective], pipes: [i6.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], MSPageBarComponent.prototype, "recursiveBreadcrumb", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageBarComponent, [{
        type: Component,
        args: [{
                selector: 'page-bar',
                templateUrl: './page-bar.component.html',
                host: {
                    '[class.ms-page-bar]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.BrandService }, { type: i3.MenuService }, { type: i0.ChangeDetectorRef }]; }, { autoTitle: [{
            type: Input
        }], recursiveBreadcrumb: [{
            type: Input
        }], title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }] }); })();
//# sourceMappingURL=page-bar.component.js.map