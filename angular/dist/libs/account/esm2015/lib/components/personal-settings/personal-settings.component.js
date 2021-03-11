import { ProfileState, UpdateProfile } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
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
PersonalSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-personal-settings-form',
                template: "<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
                exportAs: 'abpPersonalSettingsForm'
            },] }
];
PersonalSettingsComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ToasterService }
];
//# sourceMappingURL=personal-settings.component.js.map