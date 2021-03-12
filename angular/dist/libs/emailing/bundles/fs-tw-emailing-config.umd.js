(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@fs-tw/emailing/proxy'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing/config', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@fs-tw/emailing/proxy', 'rxjs/operators', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = global['fs-tw'].emailing || {}, global['fs-tw'].emailing.config = {}), global.i2, global.i1, global.ng.core, global['fs-tw'].emailing.proxy, global.rxjs.operators, global.ng.common, global.ng.forms));
}(this, (function (exports, i2, i1, i0, proxy, operators, i3, i4) { 'use strict';

    function EmailingSettingsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵlistener("keyup.enter", function EmailingSettingsComponent_ng_container_0_Template_div_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r3_1); var settings_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.submit(settings_r1); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "label");
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_6_listener($event) { var settings_r1 = ctx.$implicit; return settings_r1.defaultFromAddress = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 2);
            i0.ɵɵelementStart(8, "label");
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_11_listener($event) { var settings_r1 = ctx.$implicit; return settings_r1.defaultFromDisplayName = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 2);
            i0.ɵɵelementStart(13, "label");
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_16_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).host = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 2);
            i0.ɵɵelementStart(18, "label");
            i0.ɵɵtext(19);
            i0.ɵɵpipe(20, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_21_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).port = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 2);
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_26_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).userName = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 2);
            i0.ɵɵelementStart(28, "label");
            i0.ɵɵtext(29);
            i0.ɵɵpipe(30, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_31_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).password = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 2);
            i0.ɵɵelementStart(33, "label");
            i0.ɵɵtext(34);
            i0.ɵɵpipe(35, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "input", 3);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_36_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).domain = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 4);
            i0.ɵɵelementStart(38, "input", 5);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_38_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).enableSsl = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "label", 6);
            i0.ɵɵtext(40);
            i0.ɵɵpipe(41, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 4);
            i0.ɵɵelementStart(43, "input", 7);
            i0.ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_43_listener($event) { var settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).useDefaultCredentials = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "label", 8);
            i0.ɵɵtext(45);
            i0.ɵɵpipe(46, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "hr", 9);
            i0.ɵɵelementStart(48, "div");
            i0.ɵɵelementStart(49, "abp-button", 10);
            i0.ɵɵlistener("click", function EmailingSettingsComponent_ng_container_0_Template_abp_button_click_49_listener() { i0.ɵɵrestoreView(_r3_1); var settings_r1 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.submit(settings_r1); });
            i0.ɵɵtext(50);
            i0.ɵɵpipe(51, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var settings_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 20, "AbpEmailing::DisplayName:Abp.Mailing.DefaultFromAddress"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1.defaultFromAddress);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 22, "AbpEmailing::DisplayName:Abp.Mailing.DefaultFromDisplayName"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1.defaultFromDisplayName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 24, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Host"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.host);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 26, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Port"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.port);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 28, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.UserName"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.userName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(30, 30, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Password"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.password);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(35, 32, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Domain"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.domain);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.enableSsl);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(41, 34, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.EnableSsl"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.useDefaultCredentials);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(46, 36, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.UseDefaultCredentials"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("loading", ctx_r0.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(51, 38, "AbpAccount::Save"));
        }
    }
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
    EmailingSettingsComponent.ɵfac = function EmailingSettingsComponent_Factory(t) { return new (t || EmailingSettingsComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.ToasterService), i0.ɵɵdirectiveInject(i2.ConfigStateService), i0.ɵɵdirectiveInject(i2.AbpApplicationConfigurationService)); };
    EmailingSettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EmailingSettingsComponent, selectors: [["lib-emailing-settings"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "keyup.enter"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "custom-checkbox", "custom-control", "mb-2"], ["type", "checkbox", "id", "EnableSsl", "name", "EnableSsl", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "EnableSsl", 1, "custom-control-label"], ["type", "checkbox", "id", "UseDefaultCredentials", "name", "UseDefaultCredentials", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "UseDefaultCredentials", 1, "custom-control-label"], [1, "my-4"], ["iconClass", "fa fa-save", 3, "loading", "click"]], template: function EmailingSettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EmailingSettingsComponent_ng_container_0_Template, 52, 40, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.settings$));
            }
        }, directives: [i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i4.CheckboxControlValueAccessor, i1.ButtonComponent], pipes: [i3.AsyncPipe, i2.LocalizationPipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingSettingsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-emailing-settings',
                        templateUrl: './emailing-settings.component.html'
                    }]
            }], function () { return [{ type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i1.ToasterService }, { type: i2.ConfigStateService }, { type: i2.AbpApplicationConfigurationService }]; }, null);
    })();

    var EMAILING_SETTING_TAB_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureSettingTabs,
            deps: [i2.SettingTabsService],
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
    EmailingConfigModule.ɵfac = function EmailingConfigModule_Factory(t) { return new (t || EmailingConfigModule)(); };
    EmailingConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmailingConfigModule });
    EmailingConfigModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
                i2.CoreModule,
                i1.ThemeSharedModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmailingConfigModule, { declarations: [EmailingSettingsComponent], imports: [i2.CoreModule,
                i1.ThemeSharedModule] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CoreModule,
                            i1.ThemeSharedModule
                        ],
                        declarations: [
                            EmailingSettingsComponent
                        ]
                    }]
            }], null, null);
    })();

    var EMAILING_ROUTE_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [i2.RoutesService],
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-emailing-config.umd.js.map
