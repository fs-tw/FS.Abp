import { AbpApplicationConfigurationService, ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, Injector, ChangeDetectorRef } from '@angular/core';
import { Fs } from '@fs-tw/emailing/proxy';
import { finalize } from 'rxjs/operators';
export class EmailingSettingsComponent {
    constructor(injector, cdr, toaster, configState, appConfigService) {
        this.injector = injector;
        this.cdr = cdr;
        this.toaster = toaster;
        this.configState = configState;
        this.appConfigService = appConfigService;
        this.service = this.injector.get(Fs.Abp.Emailing.EmailingApiService);
        this.settings$ = this.service.getByEmailSettingsGet({});
    }
    set loading(value) {
        this._loading = value;
        this.cdr.markForCheck();
    }
    get loading() {
        return this._loading;
    }
    ngOnInit() {
    }
    submit(newSettings) {
        this.loading = true;
        this.service
            .updateByEmailSettingsAndProviderNameAndProviderKey(newSettings)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe(() => {
            this.toaster.success('AbpSettingManagement::SuccessfullySaved', null);
            this.appConfigService.get().subscribe(res => this.configState.setState(res));
        });
    }
}
EmailingSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-emailing-settings',
                template: "<ng-container *ngIf=\"settings$ | async; let settings\">\r\n    <div (keyup.enter)=\"submit(settings)\">\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.DefaultFromAddress' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.defaultFromAddress\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.DefaultFromDisplayName' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.defaultFromDisplayName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Host' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.host\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Port' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.port\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.UserName' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.userName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Password' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.password\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Domain' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.domain\" />\r\n        </div>\r\n\r\n        <div class=\"custom-checkbox custom-control mb-2\">\r\n            <input type=\"checkbox\" id=\"EnableSsl\" name=\"EnableSsl\"\r\n                class=\"custom-control-input\" [(ngModel)]=\"settings?.smtp.enableSsl\" /><label\r\n                class=\"custom-control-label\" for=\"EnableSsl\">{{\r\n          'AbpEmailing::DisplayName:Abp.Mailing.Smtp.EnableSsl' | abpLocalization\r\n        }}</label>\r\n        </div>\r\n\r\n        <div class=\"custom-checkbox custom-control mb-2\">\r\n            <input type=\"checkbox\" id=\"UseDefaultCredentials\" name=\"UseDefaultCredentials\"\r\n                class=\"custom-control-input\" [(ngModel)]=\"settings?.smtp.useDefaultCredentials\" /><label\r\n                class=\"custom-control-label\" for=\"UseDefaultCredentials\">{{\r\n          'AbpEmailing::DisplayName:Abp.Mailing.Smtp.UseDefaultCredentials' | abpLocalization\r\n        }}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"my-4\" />\r\n\r\n    <div>\r\n        <abp-button (click)=\"submit(settings)\" iconClass=\"fa fa-save\" [loading]=\"loading\">{{\r\n        'AbpAccount::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </div>\r\n</ng-container>"
            },] }
];
EmailingSettingsComponent.ctorParameters = () => [
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: ToasterService },
    { type: ConfigStateService },
    { type: AbpApplicationConfigurationService }
];
//# sourceMappingURL=emailing-settings.component.js.map