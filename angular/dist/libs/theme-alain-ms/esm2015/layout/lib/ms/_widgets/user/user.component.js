import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
// import { UserService } from '@core';
import { SettingsService } from '@delon/theme';
import { MSTopbarService } from '../../services/topbar.service';
import { AuthService } from '@fs-tw/account';
import { ConfigStateService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@fs-tw/account";
import * as i2 from "@angular/router";
import * as i3 from "@abp/ng.core";
import * as i4 from "../../services/topbar.service";
import * as i5 from "@delon/theme";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/icon";
function MSUserComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function MSUserComponent_ng_template_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.initLogin(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpAccount::Login"));
} }
function MSUserComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "span", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelementStart(9, "a", 10);
    i0.ɵɵelement(10, "i", 11);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 12);
    i0.ɵɵelementStart(14, "a", 13);
    i0.ɵɵlistener("click", function MSUserComponent_div_2_div_1_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.logout(); });
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const currentUser_r5 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", currentUser_r5.userName, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(currentUser_r5.userName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(12, 4, "AbpAccount::ManageYourProfile"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 6, "AbpUi::Logout"));
} }
function MSUserComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, MSUserComponent_div_2_div_1_Template, 17, 8, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const currentUser_r5 = ctx.ngIf;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", currentUser_r5.isAuthenticated)("ngIfElse", _r0);
} }
export class MSUserComponent {
    constructor(authService, router, configStateService, srv, settings) {
        this.authService = authService;
        this.router = router;
        this.configStateService = configStateService;
        this.settings = settings;
        this.currentUser$ = this.configStateService.getOne$('currentUser');
    }
    initLogin() {
        this.authService.initLogin();
    }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
}
MSUserComponent.ɵfac = function MSUserComponent_Factory(t) { return new (t || MSUserComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.ConfigStateService), i0.ɵɵdirectiveInject(i4.MSTopbarService), i0.ɵɵdirectiveInject(i5.SettingsService)); };
MSUserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSUserComponent, selectors: [["ms-user"]], hostVars: 6, hostBindings: function MSUserComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__topbar-item", true)("alain-ms__topbar-dd", true)("alain-ms__user", true);
    } }, decls: 4, vars: 3, consts: [["loginBtnTpl", ""], [4, "ngIf"], [1, "alain-ms__topbar-item-btn", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "alain-ms__topbar-item-btn"], [1, "alain-ms__topbar-dd-menu", "width-md"], [1, "alain-ms__user-hd"], [1, "d-flex"], [1, "ml-md"], [1, "alain-ms__user-bd"], ["routerLink", "/account/manage-profile", 1, "alain-ms__user-bd-item"], ["nz-icon", "", "nzType", "safety"], [1, "alain-ms__user-fd"], [1, "d-block", "pt-sm", "pb-xs", "text-center", 3, "click"]], template: function MSUserComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MSUserComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, MSUserComponent_div_2_Template, 2, 2, "div", 1);
        i0.ɵɵpipe(3, "async");
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 1, ctx.currentUser$));
    } }, directives: [i6.NgIf, i2.RouterLinkWithHref, i7.NzIconDirective], pipes: [i6.AsyncPipe, i3.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSUserComponent, [{
        type: Component,
        args: [{
                selector: 'ms-user',
                templateUrl: './user.component.html',
                host: {
                    '[class.alain-ms__topbar-item]': 'true',
                    '[class.alain-ms__topbar-dd]': 'true',
                    '[class.alain-ms__user]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.ConfigStateService }, { type: i4.MSTopbarService }, { type: i5.SettingsService }]; }, null); })();
//# sourceMappingURL=user.component.js.map