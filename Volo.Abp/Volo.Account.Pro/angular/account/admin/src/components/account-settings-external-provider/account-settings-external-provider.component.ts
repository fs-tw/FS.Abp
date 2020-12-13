import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { AbstractAccountSettingsService } from '../../abstracts/abstract-account-config.service';
import { AccountExternalProviderService } from '../../services/account-external-provider.service';
import { AbstractAccountSettingsComponent } from '../../abstracts/abstract-account-settings.component';
import {
  AccountExternalProviderSettings,
  AccountExternalProviderSetting,
} from '../../models/account-settings';

@Component({
  selector: 'abp-account-settings-external-provider',
  templateUrl: './account-settings-external-provider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractAccountSettingsService,
      useClass: AccountExternalProviderService,
    },
  ],
})
export class AccountSettingsExternalProviderComponent
  extends AbstractAccountSettingsComponent<
    AccountExternalProviderSettings,
    AccountExternalProviderSetting[]
  >
  implements OnInit {
  mapInitialTenantSettings = (result: AccountExternalProviderSettings) => ({
    settings: result.settings.filter(setting => setting.enabled).map(this.setUseHostSettingsOf),
  });

  ngOnInit() {
    if (this.isTenant) {
      this.settings$ = this.service.getSettings().pipe(map(this.mapInitialTenantSettings));
    } else {
      super.ngOnInit();
    }
  }

  mapTenantSettingsForSubmit(newSettings: AccountExternalProviderSetting[]) {
    return newSettings.map(this.clearPropertyValues);
  }

  private clearPropertyValues(setting: AccountExternalProviderSetting) {
    if (setting.useHostSettings) {
      setting.properties.forEach(prop => (prop.value = ''));
      setting.secretProperties.forEach(prop => (prop.value = ''));
    }

    const { useHostSettings, ...mappedSetting } = setting;
    return mappedSetting;
  }

  private setUseHostSettingsOf(setting: AccountExternalProviderSetting) {
    const useHostSettings = !(
      setting.properties.some(prop => prop.value) ||
      setting.secretProperties.some(prop => prop.value)
    );
    return {
      ...setting,
      useHostSettings,
    };
  }
}
