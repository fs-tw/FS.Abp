import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { UNIFY_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { UNIFY_THEME_INITIAL_PROVIDERS } from './providers/initial.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UNIFY_THEME_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-validate/core";
export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
export class ThemeUnifyModule {
    static forRoot() {
        return {
            ngModule: RootUnifyModule,
            providers: [
                UNIFY_THEME_STYLES_PROVIDERS,
                UNIFY_THEME_INITIAL_PROVIDERS,
                UNIFY_THEME_SETTING_TAB_PROVIDERS
            ],
        };
    }
}
ThemeUnifyModule.ɵfac = function ThemeUnifyModule_Factory(t) { return new (t || ThemeUnifyModule)(); };
ThemeUnifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeUnifyModule });
ThemeUnifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule,
            NgbDropdownModule,
            NgxValidateCoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeUnifyModule, { declarations: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
        FooterComponent,
        BannerComponent,
        ValidationErrorComponent,
        SettingsComponent], imports: [CoreModule,
        ThemeSharedModule,
        NgbDropdownModule,
        NgxValidateCoreModule], exports: [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent, HeaderComponent,
        FooterComponent,
        SettingsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeUnifyModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ...LAYOUTS,
                    HeaderComponent,
                    FooterComponent,
                    BannerComponent,
                    ValidationErrorComponent,
                    SettingsComponent
                ],
                exports: [
                    ...LAYOUTS,
                    HeaderComponent,
                    FooterComponent,
                    SettingsComponent
                ],
                entryComponents: [
                    ...LAYOUTS
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule
                ]
            }]
    }], null, null); })();
export class RootUnifyModule {
}
RootUnifyModule.ɵfac = function RootUnifyModule_Factory(t) { return new (t || RootUnifyModule)(); };
RootUnifyModule.ɵmod = i0.ɵɵdefineNgModule({ type: RootUnifyModule });
RootUnifyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            NgxValidateCoreModule.forRoot({
                targetSelector: '.form-control',
                invalidClasses: 'input-validation-error',
                blueprints: {
                    creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                    email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                    invalid: 'AbpValidation::ThisFieldIsNotValid.',
                    max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                    min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                    passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
                    range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    required: 'AbpValidation::ThisFieldIsRequired.',
                    url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                },
                errorTemplate: ValidationErrorComponent,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RootUnifyModule, { imports: [i1.NgxValidateCoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RootUnifyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-control',
                        invalidClasses: 'input-validation-error',
                        blueprints: {
                            creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                            email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                            invalid: 'AbpValidation::ThisFieldIsNotValid.',
                            max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                            min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                            passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
                            range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            required: 'AbpValidation::ThisFieldIsRequired.',
                            url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                        },
                        errorTemplate: ValidationErrorComponent,
                    })
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=theme-unify.module.js.map