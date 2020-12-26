import { ConfigStateService, AbpApplicationConfigurationService, SettingTabsService, CoreModule, RoutesService } from '@abp/ng.core';
import { ToasterService, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, Injector, ChangeDetectorRef, APP_INITIALIZER, NgModule } from '@angular/core';
import { Fs } from '@fs/emailing/proxy';
import { finalize } from 'rxjs/operators';

class EmailingSettingsComponent {
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

const EMAILING_SETTING_TAB_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureSettingTabs,
        deps: [SettingTabsService],
        multi: true,
    },
];
function configureSettingTabs(settingtabs) {
    return () => {
        settingtabs.add([
            {
                name: "AbpEmailing::Menu:Emailing" /* Emailing */,
                order: 3,
                requiredPolicy: 'AbpEmailing.SettingManagement',
                component: EmailingSettingsComponent,
            },
        ]);
    };
}

class EmailingConfigModule {
    static forRoot() {
        return {
            ngModule: EmailingConfigModule,
            providers: [
                //EMAILING_ROUTE_PROVIDERS,
                EMAILING_SETTING_TAB_PROVIDERS
            ]
        };
    }
}
EmailingConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    ThemeSharedModule
                ],
                declarations: [
                    EmailingSettingsComponent
                ]
            },] }
];

const EMAILING_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routesService) {
    return () => {
        routesService.add([
            {
                path: '/emailing',
                name: "Emailing" /* Emailing */,
                iconClass: 'fas fa-book',
                layout: "application" /* application */,
                order: 3,
            },
        ]);
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { EMAILING_ROUTE_PROVIDERS, EMAILING_SETTING_TAB_PROVIDERS, EmailingConfigModule, configureRoutes, configureSettingTabs, EmailingSettingsComponent as ɵa, EMAILING_SETTING_TAB_PROVIDERS as ɵb, configureSettingTabs as ɵc };
//# sourceMappingURL=fs-emailing-config.js.map
