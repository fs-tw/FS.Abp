import { ChangePassword, ProfileState } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component, Injector } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { comparePasswords } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import snq from 'snq';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngxs/store";
import * as i3 from "@abp/ng.theme.shared";
import * as i4 from "@abp/ng.core";
import * as i5 from "@ngx-validate/core";
import * as i6 from "@angular/common";
function ChangePasswordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "label", 8);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "input", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, "AbpIdentity::DisplayName:CurrentPassword"));
} }
const { required } = Validators;
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
export class ChangePasswordComponent {
    constructor(fb, store, toasterService, injector) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.injector = injector;
        this.mapErrorsFn = (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                return errors;
            return errors.concat(groupErrors.filter(({ key }) => key === 'passwordMismatch'));
        };
    }
    ngOnInit() {
        this.hideCurrentPassword = !this.store.selectSnapshot(ProfileState.getProfile).hasPassword;
        const passwordValidations = getPasswordValidators(this.injector);
        this.form = this.fb.group({
            password: ['', required],
            newPassword: [
                '',
                {
                    validators: [required, ...passwordValidations],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [required, ...passwordValidations],
                },
            ],
        }, {
            validators: [comparePasswords(PASSWORD_FIELDS)],
        });
        if (this.hideCurrentPassword)
            this.form.removeControl('password');
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword(Object.assign(Object.assign({}, (!this.hideCurrentPassword && { currentPassword: this.form.get('password').value })), { newPassword: this.form.get('newPassword').value })))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe({
            next: () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', '', {
                    life: 5000,
                });
                if (this.hideCurrentPassword) {
                    this.hideCurrentPassword = false;
                    this.form.addControl('password', new FormControl('', [required]));
                }
            },
            error: err => {
                this.toasterService.error(snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'));
            },
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i3.ToasterService), i0.ɵɵdirectiveInject(i0.Injector)); };
ChangePasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["abp-change-password-form"]], exportAs: ["abpChangePasswordForm"], decls: 19, vars: 14, consts: [["validateOnSubmit", "", 3, "formGroup", "mapErrorsFn", "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "new-password"], ["type", "password", "id", "new-password", "formControlName", "newPassword", "autocomplete", "new-password", 1, "form-control"], ["for", "confirm-new-password"], ["type", "password", "id", "confirm-new-password", "formControlName", "repeatNewPassword", "autocomplete", "new-password", 1, "form-control"], ["iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", "buttonType", "submit", 3, "loading", "disabled"], ["for", "current-password"], ["type", "password", "id", "current-password", "formControlName", "password", "autofocus", "", "autocomplete", "current-password", 1, "form-control"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        i0.ɵɵtemplate(1, ChangePasswordComponent_div_1_Template, 7, 3, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "label", 3);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7, " * ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 2);
        i0.ɵɵelementStart(10, "label", 5);
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, " * ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "abp-button", 7);
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideCurrentPassword);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 8, "AbpIdentity::DisplayName:NewPassword"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("loading", ctx.inProgress)("disabled", ctx.form == null ? null : ctx.form.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(18, 12, "AbpIdentity::Save"));
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i4.FormSubmitDirective, i1.FormGroupDirective, i5.ValidationGroupDirective, i6.NgIf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.ValidationDirective, i3.ButtonComponent, i4.AutofocusDirective], pipes: [i4.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{
                selector: 'abp-change-password-form',
                templateUrl: './change-password.component.html',
                exportAs: 'abpChangePasswordForm',
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.Store }, { type: i3.ToasterService }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=change-password.component.js.map