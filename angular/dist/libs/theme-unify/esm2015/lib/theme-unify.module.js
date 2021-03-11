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
ThemeUnifyModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
export class RootUnifyModule {
}
RootUnifyModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=theme-unify.module.js.map