(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@fs-tw/emailing/proxy'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing/config', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@fs-tw/emailing/proxy', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = global['fs-tw'].emailing || {}, global['fs-tw'].emailing.config = {}), global.ng_core, global.ng_theme_shared, global.ng.core, global['fs-tw'].emailing.proxy, global.rxjs.operators));
}(this, (function (exports, ng_core, ng_theme_shared, core, proxy, operators) { 'use strict';

    var EmailingSettingsComponent = /** @class */ (function () {
        function EmailingSettingsComponent(injector, cdr, toaster, configState, appConfigService) {
            this.injector = injector;
            this.cdr = cdr;
            this.toaster = toaster;
            this.configState = configState;
            this.appConfigService = appConfigService;
            this.service = this.injector.get(proxy.Fs.Abp.Emailing.EmailingApiService);
            this.settings$ = this.service.getByEmailSettingsGet({});
        }
        Object.defineProperty(EmailingSettingsComponent.prototype, "loading", {
            get: function () {
                return this._loading;
            },
            set: function (value) {
                this._loading = value;
                this.cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        EmailingSettingsComponent.prototype.ngOnInit = function () {
        };
        EmailingSettingsComponent.prototype.submit = function (newSettings) {
            var _this = this;
            this.loading = true;
            this.service
                .updateByEmailSettingsAndProviderNameAndProviderKey(newSettings)
                .pipe(operators.finalize(function () { return (_this.loading = false); }))
                .subscribe(function () {
                _this.toaster.success('AbpSettingManagement::SuccessfullySaved', null);
                _this.appConfigService.get().subscribe(function (res) { return _this.configState.setState(res); });
            });
        };
        return EmailingSettingsComponent;
    }());
    EmailingSettingsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'lib-emailing-settings',
                    template: "<ng-container *ngIf=\"settings$ | async; let settings\">\r\n    <div (keyup.enter)=\"submit(settings)\">\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.DefaultFromAddress' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.defaultFromAddress\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.DefaultFromDisplayName' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings.defaultFromDisplayName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Host' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.host\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Port' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.port\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.UserName' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.userName\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Password' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.password\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>{{ 'AbpEmailing::DisplayName:Abp.Mailing.Smtp.Domain' | abpLocalization }}</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settings?.smtp.domain\" />\r\n        </div>\r\n\r\n        <div class=\"custom-checkbox custom-control mb-2\">\r\n            <input type=\"checkbox\" id=\"EnableSsl\" name=\"EnableSsl\"\r\n                class=\"custom-control-input\" [(ngModel)]=\"settings?.smtp.enableSsl\" /><label\r\n                class=\"custom-control-label\" for=\"EnableSsl\">{{\r\n          'AbpEmailing::DisplayName:Abp.Mailing.Smtp.EnableSsl' | abpLocalization\r\n        }}</label>\r\n        </div>\r\n\r\n        <div class=\"custom-checkbox custom-control mb-2\">\r\n            <input type=\"checkbox\" id=\"UseDefaultCredentials\" name=\"UseDefaultCredentials\"\r\n                class=\"custom-control-input\" [(ngModel)]=\"settings?.smtp.useDefaultCredentials\" /><label\r\n                class=\"custom-control-label\" for=\"UseDefaultCredentials\">{{\r\n          'AbpEmailing::DisplayName:Abp.Mailing.Smtp.UseDefaultCredentials' | abpLocalization\r\n        }}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"my-4\" />\r\n\r\n    <div>\r\n        <abp-button (click)=\"submit(settings)\" iconClass=\"fa fa-save\" [loading]=\"loading\">{{\r\n        'AbpAccount::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </div>\r\n</ng-container>"
                },] }
    ];
    EmailingSettingsComponent.ctorParameters = function () { return [
        { type: core.Injector },
        { type: core.ChangeDetectorRef },
        { type: ng_theme_shared.ToasterService },
        { type: ng_core.ConfigStateService },
        { type: ng_core.AbpApplicationConfigurationService }
    ]; };

    var EMAILING_SETTING_TAB_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureSettingTabs,
            deps: [ng_core.SettingTabsService],
            multi: true,
        },
    ];
    function configureSettingTabs(settingtabs) {
        return function () {
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

    var EmailingConfigModule = /** @class */ (function () {
        function EmailingConfigModule() {
        }
        EmailingConfigModule.forRoot = function () {
            return {
                ngModule: EmailingConfigModule,
                providers: [
                    //EMAILING_ROUTE_PROVIDERS,
                    EMAILING_SETTING_TAB_PROVIDERS
                ]
            };
        };
        return EmailingConfigModule;
    }());
    EmailingConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        ng_core.CoreModule,
                        ng_theme_shared.ThemeSharedModule
                    ],
                    declarations: [
                        EmailingSettingsComponent
                    ]
                },] }
    ];

    var EMAILING_ROUTE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routesService) {
        return function () {
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

    exports.EMAILING_ROUTE_PROVIDERS = EMAILING_ROUTE_PROVIDERS;
    exports.EMAILING_SETTING_TAB_PROVIDERS = EMAILING_SETTING_TAB_PROVIDERS;
    exports.EmailingConfigModule = EmailingConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.configureSettingTabs = configureSettingTabs;
    exports.ɵa = EmailingSettingsComponent;
    exports.ɵb = EMAILING_SETTING_TAB_PROVIDERS;
    exports.ɵc = configureSettingTabs;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-emailing-config.umd.js.map
