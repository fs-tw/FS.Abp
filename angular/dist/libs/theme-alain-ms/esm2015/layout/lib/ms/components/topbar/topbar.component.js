import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { MSTopbarService, } from '../../services/topbar.service';
import { EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/topbar.service";
import * as i2 from "@abp/ng.core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../../_widgets/all-nav/all-nav.component";
import * as i6 from "../../_widgets/langs/langs.component";
import * as i7 from "../../_widgets/user/user.component";
function MSTopbarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 8);
} }
function MSTopbarComponent_ms_all_nav_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ms-all-nav");
} }
function MSTopbarComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r3.appInfo.logoUrl, i0.ɵɵsanitizeUrl);
} }
function MSTopbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "ms-langs");
    i0.ɵɵelement(2, "ms-user");
    i0.ɵɵelementEnd();
} }
export class MSTopbarComponent {
    constructor(srv, 
    //  public userSrv: UserService,
    cdr, environment) {
        this.srv = srv;
        this.cdr = cdr;
        this.environment = environment;
        this.inited = false;
        this.allNav = false;
    }
    get appInfo() {
        return this.environment.getEnvironment().application;
    }
    ngOnInit() {
        this.srv.getData().subscribe(() => {
            this.inited = true;
            this.mergeLinks();
            this.cdr.detectChanges();
        });
    }
    mergeLinks() {
        const res = this.srv.data.navLinks;
        this.links = [res.finance, res.workorder, res.support].map((i) => {
            if (i.className == null) {
                i.className = '';
            }
            if (!i.links || i.links.length === 0) {
                i.links = undefined;
            }
            else {
                i.className += ' alain-ms__topbar-dd';
            }
            return i;
        });
    }
}
MSTopbarComponent.ɵfac = function MSTopbarComponent_Factory(t) { return new (t || MSTopbarComponent)(i0.ɵɵdirectiveInject(i1.MSTopbarService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.EnvironmentService)); };
MSTopbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSTopbarComponent, selectors: [["ms-topbar"]], hostVars: 4, hostBindings: function MSTopbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar", true)("alain-ms__topbar-single", ctx.allNav);
    } }, inputs: { allNav: "allNav" }, decls: 10, vars: 5, consts: [["defaultLogo", ""], [1, "alain-ms__topbar-main"], [4, "ngIf"], [1, "alain-ms__topbar-logo"], ["routerLink", "/", 1, "alain-ms__topbar-logo-img"], [3, "src", 4, "ngIf", "ngIfElse"], ["routerLink", "/", 1, "alain-ms__topbar-logo-link"], ["class", "alain-ms__topbar-widget", 4, "ngIf"], ["src", "./assets/logo-color.svg"], [3, "src"], [1, "alain-ms__topbar-widget"]], template: function MSTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MSTopbarComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, MSTopbarComponent_ms_all_nav_3_Template, 1, 0, "ms-all-nav", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "a", 4);
        i0.ɵɵtemplate(6, MSTopbarComponent_img_6_Template, 1, 1, "img", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "a", 6);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, MSTopbarComponent_div_9_Template, 3, 0, "div", 7);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.allNav);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.appInfo.logoUrl)("ngIfElse", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.appInfo.name, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.inited);
    } }, directives: [i3.NgIf, i4.RouterLinkWithHref, i5.MSAllNavComponent, i6.MSLangsComponent, i7.MSUserComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSTopbarComponent, [{
        type: Component,
        args: [{
                selector: 'ms-topbar',
                templateUrl: './topbar.component.html',
                host: {
                    '[class.alain-ms__topbar]': 'true',
                    '[class.alain-ms__topbar-single]': 'allNav',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.MSTopbarService }, { type: i0.ChangeDetectorRef }, { type: i2.EnvironmentService }]; }, { allNav: [{
            type: Input
        }] }); })();
//# sourceMappingURL=topbar.component.js.map