import { ConfigStateService, AbpApplicationConfigurationService, LocalizationPipe, SettingTabsService, CoreModule, RoutesService } from '@abp/ng.core';
import { ToasterService, ButtonComponent, ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵelement, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵdirectiveInject, Injector, ChangeDetectorRef, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, Component, APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Fs } from '@fs-tw/emailing/proxy';
import { finalize } from 'rxjs/operators';
import { NgIf, AsyncPipe } from '@angular/common';
import { DefaultValueAccessor, NgControlStatus, NgModel, CheckboxControlValueAccessor } from '@angular/forms';

function EmailingSettingsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵlistener("keyup.enter", function EmailingSettingsComponent_ng_container_0_Template_div_keyup_enter_1_listener() { ɵɵrestoreView(_r3); const settings_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.submit(settings_r1); });
    ɵɵelementStart(2, "div", 2);
    ɵɵelementStart(3, "label");
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(6, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_6_listener($event) { const settings_r1 = ctx.$implicit; return settings_r1.defaultFromAddress = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 2);
    ɵɵelementStart(8, "label");
    ɵɵtext(9);
    ɵɵpipe(10, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(11, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_11_listener($event) { const settings_r1 = ctx.$implicit; return settings_r1.defaultFromDisplayName = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 2);
    ɵɵelementStart(13, "label");
    ɵɵtext(14);
    ɵɵpipe(15, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(16, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_16_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).host = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 2);
    ɵɵelementStart(18, "label");
    ɵɵtext(19);
    ɵɵpipe(20, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(21, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_21_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).port = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 2);
    ɵɵelementStart(23, "label");
    ɵɵtext(24);
    ɵɵpipe(25, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(26, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_26_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).userName = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(27, "div", 2);
    ɵɵelementStart(28, "label");
    ɵɵtext(29);
    ɵɵpipe(30, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(31, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_31_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).password = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(32, "div", 2);
    ɵɵelementStart(33, "label");
    ɵɵtext(34);
    ɵɵpipe(35, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(36, "input", 3);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_36_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).domain = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(37, "div", 4);
    ɵɵelementStart(38, "input", 5);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_38_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).enableSsl = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(39, "label", 6);
    ɵɵtext(40);
    ɵɵpipe(41, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(42, "div", 4);
    ɵɵelementStart(43, "input", 7);
    ɵɵlistener("ngModelChange", function EmailingSettingsComponent_ng_container_0_Template_input_ngModelChange_43_listener($event) { const settings_r1 = ctx.$implicit; return (settings_r1 == null ? null : settings_r1.smtp).useDefaultCredentials = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(44, "label", 8);
    ɵɵtext(45);
    ɵɵpipe(46, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(47, "hr", 9);
    ɵɵelementStart(48, "div");
    ɵɵelementStart(49, "abp-button", 10);
    ɵɵlistener("click", function EmailingSettingsComponent_ng_container_0_Template_abp_button_click_49_listener() { ɵɵrestoreView(_r3); const settings_r1 = ctx.$implicit; const ctx_r13 = ɵɵnextContext(); return ctx_r13.submit(settings_r1); });
    ɵɵtext(50);
    ɵɵpipe(51, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const settings_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 20, "AbpEmailing::DisplayName:Abp.Mailing.DefaultFromAddress"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1.defaultFromAddress);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 22, "AbpEmailing::DisplayName:Abp.Mailing.DefaultFromDisplayName"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1.defaultFromDisplayName);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(15, 24, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Host"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.host);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 26, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Port"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.port);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 28, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.UserName"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.userName);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(30, 30, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Password"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.password);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(35, 32, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.Domain"));
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.domain);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.enableSsl);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(41, 34, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.EnableSsl"));
    ɵɵadvance(3);
    ɵɵproperty("ngModel", settings_r1 == null ? null : settings_r1.smtp.useDefaultCredentials);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(46, 36, "AbpEmailing::DisplayName:Abp.Mailing.Smtp.UseDefaultCredentials"));
    ɵɵadvance(4);
    ɵɵproperty("loading", ctx_r0.loading);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(51, 38, "AbpAccount::Save"));
} }
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
EmailingSettingsComponent.ɵfac = function EmailingSettingsComponent_Factory(t) { return new (t || EmailingSettingsComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(AbpApplicationConfigurationService)); };
EmailingSettingsComponent.ɵcmp = ɵɵdefineComponent({ type: EmailingSettingsComponent, selectors: [["lib-emailing-settings"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "keyup.enter"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "custom-checkbox", "custom-control", "mb-2"], ["type", "checkbox", "id", "EnableSsl", "name", "EnableSsl", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "EnableSsl", 1, "custom-control-label"], ["type", "checkbox", "id", "UseDefaultCredentials", "name", "UseDefaultCredentials", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "UseDefaultCredentials", 1, "custom-control-label"], [1, "my-4"], ["iconClass", "fa fa-save", 3, "loading", "click"]], template: function EmailingSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EmailingSettingsComponent_ng_container_0_Template, 52, 40, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.settings$));
    } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, CheckboxControlValueAccessor, ButtonComponent], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EmailingSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-emailing-settings',
                templateUrl: './emailing-settings.component.html'
            }]
    }], function () { return [{ type: Injector }, { type: ChangeDetectorRef }, { type: ToasterService }, { type: ConfigStateService }, { type: AbpApplicationConfigurationService }]; }, null); })();

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
EmailingConfigModule.ɵfac = function EmailingConfigModule_Factory(t) { return new (t || EmailingConfigModule)(); };
EmailingConfigModule.ɵmod = ɵɵdefineNgModule({ type: EmailingConfigModule });
EmailingConfigModule.ɵinj = ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EmailingConfigModule, { declarations: [EmailingSettingsComponent], imports: [CoreModule,
        ThemeSharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EmailingConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CoreModule,
                    ThemeSharedModule
                ],
                declarations: [
                    EmailingSettingsComponent
                ]
            }]
    }], null, null); })();

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

export { EMAILING_ROUTE_PROVIDERS, EMAILING_SETTING_TAB_PROVIDERS, EmailingConfigModule, configureRoutes, configureSettingTabs };
//# sourceMappingURL=fs-tw-emailing-config.js.map
