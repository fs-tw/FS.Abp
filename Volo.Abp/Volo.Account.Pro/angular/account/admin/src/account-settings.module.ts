import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AbstractAccountSettingsComponent } from './abstracts/abstract-account-settings.component';
import { AccountSettingsGeneralComponent } from './components/account-settings-general/account-settings-general.component';
import { AccountSettingsLdapComponent } from './components/account-settings-ldap/account-settings-ldap.component';
import { AccountSettingsTwoFactorComponent } from './components/account-settings-two-factor/account-settings-two-factor.component';
import { AccountSettingsComponent } from './components/account-settings.component';
import { AccountSettingsCaptchaComponent } from './components/account-settings-captcha/account-settings-captcha.component';
import { AccountSettingsExternalProviderComponent } from './components/account-settings-external-provider/account-settings-external-provider.component';

const components = [
  AbstractAccountSettingsComponent,
  AccountSettingsComponent,
  AccountSettingsLdapComponent,
  AccountSettingsGeneralComponent,
  AccountSettingsTwoFactorComponent,
  AccountSettingsCaptchaComponent,
  AccountSettingsExternalProviderComponent,
];

@NgModule({
  imports: [CoreModule, ThemeSharedModule, NgbNavModule],
  exports: [...components],
  declarations: [...components],
})
export class AccountSettingsModule {}
