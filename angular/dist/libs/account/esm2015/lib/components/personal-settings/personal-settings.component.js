import { ProfileState, UpdateProfile } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngxs/store";
import * as i3 from "@abp/ng.theme.shared";
import * as i4 from "@angular/common";
import * as i5 from "@abp/ng.core";
import * as i6 from "@ngx-validate/core";
function PersonalSettingsComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 1);
    i0.ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submit(); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "label", 3);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 4);
    i0.ɵɵlistener("keydown.space", function PersonalSettingsComponent_form_0_Template_input_keydown_space_7_listener($event) { return $event.preventDefault(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 5);
    i0.ɵɵelementStart(9, "div", 6);
    i0.ɵɵelementStart(10, "div", 2);
    i0.ɵɵelementStart(11, "label", 7);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 6);
    i0.ɵɵelementStart(16, "div", 2);
    i0.ɵɵelementStart(17, "label", 9);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 2);
    i0.ɵɵelementStart(22, "label", 11);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26, " * ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 2);
    i0.ɵɵelementStart(29, "label", 13);
    i0.ɵɵtext(30);
    i0.ɵɵpipe(31, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(32, "input", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "abp-button", 15);
    i0.ɵɵtext(34);
    i0.ɵɵpipe(35, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 9, "AbpIdentity::DisplayName:UserName"));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 11, "AbpIdentity::DisplayName:Name"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 13, "AbpIdentity::DisplayName:Surname"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 15, "AbpIdentity::DisplayName:Email"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(31, 17, "AbpIdentity::DisplayName:PhoneNumber"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("loading", ctx_r0.inProgress)("disabled", ctx_r0.form == null ? null : ctx_r0.form.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(35, 19, "AbpIdentity::Save"), "");
} }
const { maxLength, required, email } = Validators;
export class PersonalSettingsComponent {
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        const profile = this.store.selectSnapshot(ProfileState.getProfile);
        this.form = this.fb.group({
            userName: [profile.userName, [required, maxLength(256)]],
            email: [profile.email, [required, email, maxLength(256)]],
            name: [profile.name || '', [maxLength(64)]],
            surname: [profile.surname || '', [maxLength(64)]],
            phoneNumber: [profile.phoneNumber || '', [maxLength(16)]],
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new UpdateProfile(this.form.value))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
        });
    }
}
PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i3.ToasterService)); };
PersonalSettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["abp-personal-settings-form"]], exportAs: ["abpPersonalSettingsForm"], decls: 1, vars: 1, consts: [["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "userName", "autofocus", "", 1, "form-control", 3, "keydown.space"], [1, "row"], [1, "col", "col-md-6"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "surname"], ["type", "text", "id", "surname", "formControlName", "surname", 1, "form-control"], ["for", "email-address"], ["type", "text", "id", "email-address", "formControlName", "email", 1, "form-control"], ["for", "phone-number"], ["type", "text", "id", "phone-number", "formControlName", "phoneNumber", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", 3, "loading", "disabled"]], template: function PersonalSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 36, 21, "form", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.form);
    } }, directives: [i4.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i1.FormGroupDirective, i6.ValidationGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.ValidationDirective, i5.AutofocusDirective, i3.ButtonComponent], pipes: [i5.LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersonalSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'abp-personal-settings-form',
                templateUrl: './personal-settings.component.html',
                exportAs: 'abpPersonalSettingsForm',
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.Store }, { type: i3.ToasterService }]; }, null); })();
//# sourceMappingURL=personal-settings.component.js.map