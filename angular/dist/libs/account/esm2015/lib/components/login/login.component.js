//import { AuthService, SetRemember, ConfigState } from '@abp/ng.core';
import { ConfigStateService } from '@abp/ng.core';
import { AuthService } from '../../services/auth.service';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import snq from 'snq';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "angular-oauth2-oidc";
import * as i3 from "@ngxs/store";
import * as i4 from "@abp/ng.theme.shared";
import * as i5 from "../../services/auth.service";
import * as i6 from "@abp/ng.core";
import * as i7 from "../auth-wrapper/auth-wrapper.component";
import * as i8 from "@angular/common";
import * as i9 from "@ngx-validate/core";
import * as i10 from "@angular/router";
function LoginComponent_abp_auth_wrapper_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-auth-wrapper", 3);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("mainContentRef", _r1)("cancelContentRef", _r3);
} }
function LoginComponent_ng_template_1_strong_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementStart(3, "a", 15);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpAccount::AreYouANewUser"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, "AbpAccount::Register"));
} }
function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, LoginComponent_ng_template_1_strong_3_Template, 6, 6, "strong", 4);
    i0.ɵɵelementStart(4, "form", 5);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_ng_template_1_Template_form_ngSubmit_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onSubmit(); });
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "label", 7);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 6);
    i0.ɵɵelementStart(11, "label", 9);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 11);
    i0.ɵɵelementStart(16, "label", 12);
    i0.ɵɵelement(17, "input", 13);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "abp-button", 14);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "AbpAccount::Login"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r2.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 10, "AbpAccount::UserNameOrEmailAddress"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 12, "AbpAccount::Password"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 14, "AbpAccount::RememberMe"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("loading", ctx_r2.inProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(22, 16, "AbpAccount::Login"), " ");
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "a", 17);
    i0.ɵɵelementStart(2, "button", 18);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, "AbpAccount::Cancel"), " ");
} }
const _c0 = function (a0) { return { value: a0 }; };
const _c1 = function (a0, a1) { return { mainContentRef: a0, cancelContentRef: a1 }; };
const _c2 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
const { maxLength, minLength, required } = Validators;
export class LoginComponent {
    constructor(fb, oauthService, store, toasterService, authService, configStateService) {
        this.fb = fb;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.configStateService = configStateService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (this.configStateService.getSetting('Abp.Account.IsSelfRegistrationEnabled') || '').toLowerCase() !== 'false';
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, maxLength(128)]],
            remember: [false],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.authService
            .login(this.form.get('username').value, this.form.get('password').value)
            .pipe(catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            //this.store.dispatch(new SetRemember(this.form.get('remember').value));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i3.Store), i0.ɵɵdirectiveInject(i4.ToasterService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.ConfigStateService)); };
LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["abp-login"]], decls: 5, vars: 11, consts: [[3, "mainContentRef", "cancelContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], ["cancelContentRef", ""], [3, "mainContentRef", "cancelContentRef"], [4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login-input-user-name-or-email-address"], ["type", "text", "id", "login-input-user-name-or-email-address", "formControlName", "username", "autocomplete", "username", "autofocus", "", 1, "form-control"], ["for", "login-input-password"], ["type", "password", "id", "login-input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["validationTarget", "", "validationStyle", "", 1, "form-check"], ["for", "login-input-remember-me", 1, "form-check-label"], ["type", "checkbox", "id", "login-input-remember-me", "formControlName", "remember", 1, "form-check-input"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"], ["routerLink", "/account/register", 1, "text-decoration-none"], [1, "card-footer", "text-center", "border-0"], ["routerLink", "/"], ["type", "button", "name", "Action", "value", "Cancel", 1, "px-2", "py-0", "btn", "btn-link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LoginComponent_abp_auth_wrapper_0_Template, 1, 2, "abp-auth-wrapper", 0);
        i0.ɵɵtemplate(1, LoginComponent_ng_template_1_Template, 23, 18, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, LoginComponent_ng_template_3_Template, 5, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction2(8, _c2, ctx.authWrapperKey, i0.ɵɵpureFunction2(5, _c1, i0.ɵɵpureFunction1(1, _c0, _r1), i0.ɵɵpureFunction1(3, _c0, _r3))));
    } }, directives: [i6.ReplaceableTemplateDirective, i7.AuthWrapperComponent, i8.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i6.FormSubmitDirective, i1.FormGroupDirective, i9.ValidationGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i9.ValidationDirective, i6.AutofocusDirective, i9.ValidationTargetDirective, i9.ValidationStyleDirective, i1.CheckboxControlValueAccessor, i4.ButtonComponent, i10.RouterLinkWithHref], pipes: [i6.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'abp-login',
                templateUrl: './login.component.html',
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OAuthService }, { type: i3.Store }, { type: i4.ToasterService }, { type: i5.AuthService }, { type: i6.ConfigStateService }]; }, null); })();
//# sourceMappingURL=login.component.js.map