import {
  ApplicationConfigurationService,
  ConfigStateService,
  SubscriptionService,
} from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { filter, finalize } from 'rxjs/operators';
import snq from 'snq';
import type * as IdentitySettings from '../models/identity-settings';
import { IdentityConfigService } from '../services/identity-config.service';

const { required, max, min } = Validators;

@Component({
  selector: 'abp-identity-settings',
  templateUrl: './identity-settings.component.html',
  providers: [SubscriptionService],
})
export class IdentitySettingsComponent {
  settings = {} as IdentitySettings.Settings;
  loading: boolean;
  form: FormGroup;

  get initialized(): boolean {
    return JSON.stringify(this.settings) !== '{}';
  }

  doNotRequireConfirmedPhoneNumber = () => {
    this.form.get('signIn.requireConfirmedPhoneNumber').setValue(false);
  };

  enablePhoneNumberConfirmation = () => {
    this.form.get('signIn.enablePhoneNumberConfirmation').setValue(true);
  };

  constructor(
    private identityConfigService: IdentityConfigService,
    private toaster: ToasterService,
    private fb: FormBuilder,
    private store: Store,
    private subscription: SubscriptionService,
    private configState: ConfigStateService,
    private appConfigService: ApplicationConfigurationService,
  ) {
    identityConfigService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.buildForm();
      this.syncConfirmationOptions();
    });
  }

  buildForm() {
    const passwordSettings: IdentitySettings.Password = snq(
      () => this.settings.password,
      {} as IdentitySettings.Password,
    );

    const password = this.fb.group({
      requiredLength: [passwordSettings.requiredLength, [required, max(32), min(2)]],
      requiredUniqueChars: [passwordSettings.requiredUniqueChars, [required, max(32), min(1)]],
      requireNonAlphanumeric: passwordSettings.requireNonAlphanumeric,
      requireLowercase: passwordSettings.requireLowercase,
      requireUppercase: passwordSettings.requireUppercase,
      requireDigit: passwordSettings.requireDigit,
    });

    const lockoutSettings: IdentitySettings.Lockout = snq(
      () => this.settings.lockout,
      {} as IdentitySettings.Lockout,
    );

    const lockout = this.fb.group({
      allowedForNewUsers: lockoutSettings.allowedForNewUsers,
      lockoutDuration: [lockoutSettings.lockoutDuration, [required]],
      maxFailedAccessAttempts: [lockoutSettings.maxFailedAccessAttempts, [required]],
    });

    const signInSettings: IdentitySettings.SignIn = snq(
      () => this.settings.signIn,
      {} as IdentitySettings.SignIn,
    );

    const signIn = this.fb.group({
      requireConfirmedEmail: signInSettings.requireConfirmedEmail,
      enablePhoneNumberConfirmation: signInSettings.enablePhoneNumberConfirmation,
      requireConfirmedPhoneNumber: signInSettings.requireConfirmedPhoneNumber,
    });

    const userSettings: IdentitySettings.User = snq(
      () => this.settings.user,
      {} as IdentitySettings.User,
    );

    const user = this.fb.group({
      isUserNameUpdateEnabled: userSettings.isUserNameUpdateEnabled,
      isEmailUpdateEnabled: userSettings.isEmailUpdateEnabled,
    });

    this.form = this.fb.group({
      password,
      lockout,
      signIn,
      user,
    });
  }

  syncConfirmationOptions() {
    this.subscription.addOne(
      this.form.get('signIn.requireConfirmedPhoneNumber').valueChanges.pipe(filter(Boolean)),
      this.enablePhoneNumberConfirmation,
    );

    this.subscription.addOne(
      this.form
        .get('signIn.enablePhoneNumberConfirmation')
        .valueChanges.pipe(filter(value => !value)),
      this.doNotRequireConfirmedPhoneNumber,
    );
  }

  submit() {
    this.loading = true;
    this.identityConfigService
      .updateSettings(this.form.value)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.appConfigService.getConfiguration().subscribe(res => this.configState.setState(res));
        }),
      )
      .subscribe(() => this.toaster.success('AbpIdentity::SavedSuccessfully', null));
  }
}
