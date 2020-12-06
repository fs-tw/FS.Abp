// tslint:disable: no-duplicate-imports
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// #region default language
import { default as ngLang } from '@angular/common/locales/zh';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { zhTW as dateLang } from 'date-fns/locale';
import { NZ_DATE_LOCALE, NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd/i18n';
const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
// register angular
import { registerLocaleData } from '@angular/common';
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];
// #endregion

// #region i18n services

import { I18NService } from '@fs/theme.ng-alain-ms/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';

const I18NSERVICE_PROVIDES = [{ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }];

// #endregion

// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@fs/theme.ng-alain-ms/shared';
const FORM_MODULES = [JsonSchemaModule];
// #endregion

// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from '@fs/theme.ng-alain-ms/core';
import { SimpleInterceptor } from '@delon/auth';
const INTERCEPTOR_PROVIDES = [
  // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
// #endregion

// #region Startup Service
import { StartupService } from '@fs/theme.ng-alain-ms/core';
export function StartupServiceFactory(startupService: StartupService) {
  let fun = () => startupService.load();
  return fun;
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];
// #endregion

import { CoreModule } from '@fs/theme.ng-alain-ms/core';
import { GlobalConfigModule } from './global-config.module';
import { STWidgetModule } from '@fs/theme.ng-alain-ms/shared';
import { AlainConfigService } from '@delon/util';
import { NGALAINMS_THEME_INITIAL_PROVIDERS } from './providers/initial.provider'
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
  imports: [
    AbpCoreModule,
    //ThemeSharedModule,
    //NgbDropdownModule,
    NgxValidateCoreModule,
    STWidgetModule,
    ...FORM_MODULES,
  ],
  declarations: [
    ValidationErrorComponent
  ],
  exports: [
    ValidationErrorComponent
  ],
  entryComponents: [
    ValidationErrorComponent
  ]
})
export class ThemeNgAlainMsModule {
  static forRoot(): ModuleWithProviders<ThemeNgAlainMsModule> {
    return {
      ngModule: RootNgAlainMsModule,
      providers: [
        AlainConfigService,//Issue: https://github.com/ng-alain/ng-alain/issues/1624
        ...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES,
        NGALAINMS_THEME_INITIAL_PROVIDERS,
        BASIC_THEME_STYLES_PROVIDERS,
        ROUTE_PROVIDERS
      ]
    };
  }
}

// #region global third module
import { NgAlainMsSharedModule } from '@fs/theme.ng-alain-ms/shared';
import { NgAlainMsBasicModule } from '@fs/theme.ng-alain-ms/basic';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';

@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      targetSelector: '.form-group',
      blueprints: {
        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
        invalid: 'AbpValidation::ThisFieldIsNotValid.',
        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
    GlobalConfigModule.forRoot(),
    CoreModule,
    NgAlainMsSharedModule.forRoot(),
    NgAlainMsBasicModule.forRoot(),

  ],
})
export class RootNgAlainMsModule { }

// #endregion











// export class NgAlainMsModule {
//   static forRoot(options: Options = { loadCodes: false }): ModuleWithProviders<NgAlainMsModule> {
//     return {
//       ngModule: NgAlainMsModule,
//       providers: [
//         { provide: THEMECORE_OPTIONS, useValue: options }
//       ],
//     };
//   }  
// }
