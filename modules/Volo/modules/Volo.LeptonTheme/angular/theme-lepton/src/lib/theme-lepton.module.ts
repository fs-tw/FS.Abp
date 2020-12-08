import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { CurrentUserImageComponent } from './components/current-user-image/current-user-image.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { HttpErrorComponent } from './components/http-error/http-error.component';
import { LogoComponent } from './components/logo/logo.component';
import { CurrentUserComponent } from './components/nav-items/current-user.component';
import { FullScreenComponent } from './components/nav-items/full-screen.component';
import { LanguagesComponent } from './components/nav-items/languages.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
import { RoutesComponent } from './components/routes/routes.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { LEPTON_THEME_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
import { LEPTON_THEME_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';
import { LEPTON_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];

@NgModule({
  declarations: [
    ...LAYOUTS,
    SettingsComponent,
    ValidationErrorComponent,
    HttpErrorComponent,
    LogoComponent,
    RoutesComponent,
    NavItemsComponent,
    CurrentUserImageComponent,
    LanguagesComponent,
    CurrentUserComponent,
    FullScreenComponent,
    NavbarComponent,
    NavbarMobileComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    ...LAYOUTS,
    SettingsComponent,
    ValidationErrorComponent,
    HttpErrorComponent,
    LogoComponent,
    RoutesComponent,
    NavItemsComponent,
    CurrentUserImageComponent,
    LanguagesComponent,
    CurrentUserComponent,
    FullScreenComponent,
    NavbarComponent,
    NavbarMobileComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  entryComponents: [
    ...LAYOUTS,
    SettingsComponent,
    ValidationErrorComponent,
    HttpErrorComponent,
    LanguagesComponent,
    CurrentUserComponent,
    FullScreenComponent,
  ],
  imports: [CoreModule, ThemeSharedModule, NgbDropdownModule, NgxValidateCoreModule],
})
export class ThemeLeptonModule {
  static forRoot(): ModuleWithProviders<ThemeLeptonModule> {
    return {
      ngModule: RootThemeLeptonModule,
      providers: [
        LEPTON_THEME_NAV_ITEM_PROVIDERS,
        LEPTON_THEME_STYLES_PROVIDERS,
        LEPTON_THEME_SETTING_TAB_PROVIDERS,
      ],
    };
  }
}

@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      targetSelector: '.form-control',
      invalidClasses: 'input-validation-error',
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
        passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
  ],
})
export class RootThemeLeptonModule {}
