import { NgModule } from '@angular/core';
import { GlobalConfigModule } from './global-config.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@abp/ng.theme.basic';
import { APPINIT_PROVIDES } from './providers/startup.service';
import { LANG_PROVIDES } from './providers/lang.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
export class RootModule {
}
RootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NzMessageModule,
                    LayoutModule.forRoot(),
                    GlobalConfigModule.forRoot(),
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-control',
                        blueprints: {
                            creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                            email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                            invalid: 'AbpValidation::ThisFieldIsNotValid.',
                            max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                            min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                            passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                            range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            required: 'AbpValidation::ThisFieldIsRequired.',
                            url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                        },
                        errorTemplate: ValidationErrorComponent,
                    })
                ],
                providers: [
                    ...APPINIT_PROVIDES,
                    ...LANG_PROVIDES,
                    STYLES_PROVIDERS
                ],
            },] }
];
//# sourceMappingURL=root.module.js.map