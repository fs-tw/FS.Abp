//import { AuthService, ConfigState } from '@abp/ng.core';
import { AuthService } from '../../services/auth.service';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component, Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import snq from 'snq';
import { AccountService } from '../../services/account.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/account.service";
import * as i3 from "angular-oauth2-oidc";
import * as i4 from "@ngxs/store";
import * as i5 from "@abp/ng.theme.shared";
import * as i6 from "../../services/auth.service";
import * as i7 from "@abp/ng.core";
import * as i8 from "../auth-wrapper/auth-wrapper.component";
import * as i9 from "@angular/router";
import * as i10 from "@angular/common";
import * as i11 from "@ngx-validate/core";
function RegisterComponent_abp_auth_wrapper_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-auth-wrapper", 2);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵproperty("mainContentRef", _r1);
} }
function RegisterComponent_ng_template_1_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5);
    i0.ɵɵlistener("ngSubmit", function RegisterComponent_ng_template_1_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onSubmit(); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "label", 7);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵelementStart(9, "label", 9);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 6);
    i0.ɵɵelementStart(16, "label", 11);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "abp-button", 13);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r3.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, "AbpAccount::UserName"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 8, "AbpAccount::EmailAddress"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(18, 10, "AbpAccount::Password"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("loading", ctx_r3.inProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 12, "AbpAccount::Register"), " ");
} }
function RegisterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementStart(6, "a", 3);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RegisterComponent_ng_template_1_form_9_Template, 25, 14, "form", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 4, "AbpAccount::Register"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 6, "AbpAccount::AlreadyRegistered"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 8, "AbpAccount::Login"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isSelfRegistrationEnabled);
} }
const _c0 = function (a0) { return { value: a0 }; };
const _c1 = function (a0) { return { mainContentRef: a0 }; };
const _c2 = function (a0, a1) { return { componentKey: a0, inputs: a1 }; };
const { maxLength, required, email } = Validators;
export class RegisterComponent {
    constructor(fb, accountService, oauthService, store, toasterService, authService, injector) {
        this.fb = fb;
        this.accountService = accountService;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.injector = injector;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        // this.isSelfRegistrationEnabled =
        //   (
        //     this.store.selectSnapshot(
        //       ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled'),
        //     ) || ''
        //   ).toLowerCase() !== 'false';
        // if (!this.isSelfRegistrationEnabled) {
        //   this.toasterService.warn(
        //     {
        //       key: 'AbpAccount::SelfRegistrationDisabledMessage',
        //       defaultValue: 'Self registration is disabled.',
        //     },
        //     null,
        //     { life: 10000 },
        //   );
        //   return;
        // }
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, ...getPasswordValidators(this.injector)]],
            email: ['', [required, email]],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        const newUser = {
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        };
        this.accountService
            .register(newUser)
            .pipe(switchMap(() => this.authService.login(newUser.userName, newUser.password)), catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AccountService), i0.ɵɵdirectiveInject(i3.OAuthService), i0.ɵɵdirectiveInject(i4.Store), i0.ɵɵdirectiveInject(i5.ToasterService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i0.Injector)); };
RegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["abp-register"]], decls: 3, vars: 8, consts: [[3, "mainContentRef", 4, "abpReplaceableTemplate"], ["mainContentRef", ""], [3, "mainContentRef"], ["routerLink", "/account/login", 1, "text-decoration-none"], ["validateOnSubmit", "", "class", "mt-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "input-user-name"], ["autofocus", "", "type", "text", "id", "input-user-name", "formControlName", "username", "autocomplete", "username", 1, "form-control"], ["for", "input-email-address"], ["type", "email", "id", "input-email-address", "formControlName", "email", 1, "form-control"], ["for", "input-password"], ["type", "password", "id", "input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RegisterComponent_abp_auth_wrapper_0_Template, 1, 1, "abp-auth-wrapper", 0);
        i0.ɵɵtemplate(1, RegisterComponent_ng_template_1_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("abpReplaceableTemplate", i0.ɵɵpureFunction2(5, _c2, ctx.authWrapperKey, i0.ɵɵpureFunction1(3, _c1, i0.ɵɵpureFunction1(1, _c0, _r1))));
    } }, directives: [i7.ReplaceableTemplateDirective, i8.AuthWrapperComponent, i9.RouterLinkWithHref, i10.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i7.FormSubmitDirective, i1.FormGroupDirective, i11.ValidationGroupDirective, i1.DefaultValueAccessor, i7.AutofocusDirective, i1.NgControlStatus, i1.FormControlName, i11.ValidationDirective, i5.ButtonComponent], pipes: [i7.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{
                selector: 'abp-register',
                templateUrl: './register.component.html',
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AccountService }, { type: i3.OAuthService }, { type: i4.Store }, { type: i5.ToasterService }, { type: i6.AuthService }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=register.component.js.map