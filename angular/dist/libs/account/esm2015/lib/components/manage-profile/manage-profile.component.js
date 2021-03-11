import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetProfile, ProfileState } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@abp/ng.theme.shared";
import * as i3 from "@angular/common";
import * as i4 from "@abp/ng.core";
import * as i5 from "../change-password/change-password.component";
import * as i6 from "../personal-settings/personal-settings.component";
const _c0 = function (a0) { return { active: a0 }; };
function ManageProfileComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function ManageProfileComponent_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectedTab = 0; });
    i0.ɵɵelementStart(1, "a", 8);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, ctx_r0.selectedTab === 0));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "AbpUi::ChangePassword"));
} }
function ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-change-password-form");
} }
const _c1 = function (a0) { return { componentKey: a0 }; };
function ManageProfileComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelement(5, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ManageProfileComponent_div_11_div_1_abp_change_password_form_6_Template, 1, 0, "abp-change-password-form", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@fadeIn", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "AbpIdentity::ChangePassword"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(5, _c1, ctx_r4.changePasswordKey));
} }
function ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-personal-settings-form");
} }
function ManageProfileComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelement(5, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ManageProfileComponent_div_11_div_2_abp_personal_settings_form_6_Template, 1, 0, "abp-personal-settings-form", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@fadeIn", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "AbpIdentity::PersonalSettings"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction1(5, _c1, ctx_r5.personalSettingsKey));
} }
function ManageProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ManageProfileComponent_div_11_div_1_Template, 7, 7, "div", 12);
    i0.ɵɵtemplate(2, ManageProfileComponent_div_11_div_2_Template, 7, 7, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedTab === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.selectedTab === 1);
} }
export class ManageProfileComponent {
    constructor(store) {
        this.store = store;
        this.selectedTab = 0;
        this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
        this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
    }
    ngOnInit() {
        this.store.dispatch(new GetProfile()).subscribe(() => {
            this.isProfileLoaded = true;
            if (this.store.selectSnapshot(ProfileState.getProfile).isExternal) {
                this.hideChangePasswordTab = true;
                this.selectedTab = 1;
            }
        });
    }
}
ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(i0.ɵɵdirectiveInject(i1.Store)); };
ManageProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["abp-manage-profile"]], decls: 12, vars: 9, consts: [["id", "AbpContentToolbar"], [1, "card", "border-0", "shadow-sm", "min-h-400", 3, "abpLoading"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], ["class", "nav-item", 3, "click", 4, "ngIf"], [1, "nav-item", "mb-2", 3, "click"], ["role", "tab", "href", "javascript:void(0)", 1, "nav-link", 3, "ngClass"], ["class", "col-12 col-md-9", 4, "ngIf"], [1, "nav-item", 3, "click"], [1, "col-12", "col-md-9"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], ["role", "tabpanel", 1, "tab-pane", "active"], [4, "abpReplaceableTemplate"]], template: function ManageProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "ul", 5);
        i0.ɵɵtemplate(6, ManageProfileComponent_li_6_Template, 4, 6, "li", 6);
        i0.ɵɵelementStart(7, "li", 7);
        i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 1; });
        i0.ɵɵelementStart(8, "a", 8);
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, ManageProfileComponent_div_11_Template, 3, 2, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("abpLoading", !ctx.isProfileLoaded);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", !ctx.hideChangePasswordTab && ctx.isProfileLoaded);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx.selectedTab === 1));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 5, "AbpAccount::PersonalSettings"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isProfileLoaded);
    } }, directives: [i2.LoadingDirective, i3.NgIf, i3.NgClass, i4.ReplaceableTemplateDirective, i5.ChangePasswordComponent, i6.PersonalSettingsComponent], pipes: [i4.LocalizationPipe], styles: [".min-h-400[_ngcontent-%COMP%] {\n        min-height: 400px;\n      }"], data: { animation: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ManageProfileComponent, [{
        type: Component,
        args: [{
                selector: 'abp-manage-profile',
                templateUrl: './manage-profile.component.html',
                animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
                styles: [
                    `
      .min-h-400 {
        min-height: 400px;
      }
    `,
                ],
            }]
    }], function () { return [{ type: i1.Store }]; }, null); })();
//# sourceMappingURL=manage-profile.component.js.map