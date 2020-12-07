using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Account.ExternalProviders;
using Volo.Abp.Account.Feature;
using Volo.Abp.Account.Localization;
using Volo.Abp.Account.Settings;
using Volo.Abp.Application.Services;
using Volo.Abp.Features;
using Volo.Abp.Identity.Features;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Ldap;
using Volo.Abp.MultiTenancy;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace Volo.Abp.Account
{
    [Authorize(AccountPermissions.SettingManagement)]
    public class AccountSettingsAppService : ApplicationService, IAccountSettingsAppService
    {
        protected ISettingManager SettingManager { get; }

        protected ExternalProviderSettingsHelper ExternalProviderSettingsHelper { get; }

        public AccountSettingsAppService(ISettingManager settingManager, ExternalProviderSettingsHelper externalProviderSettingsHelper)
        {
            SettingManager = settingManager;
            ExternalProviderSettingsHelper = externalProviderSettingsHelper;
            LocalizationResource = typeof(AccountResource);
        }

        public virtual async Task<AccountSettingsDto> GetAsync()
        {
            return new AccountSettingsDto
            {
                IsSelfRegistrationEnabled = await SettingProvider.GetAsync<bool>(AccountSettingNames.IsSelfRegistrationEnabled),
                EnableLocalLogin = await SettingProvider.GetAsync<bool>(AccountSettingNames.EnableLocalLogin)
            };
        }

        public virtual async Task UpdateAsync(AccountSettingsDto input)
        {
            if (input != null)
            {
                await SettingManager.SetForCurrentTenantAsync(AccountSettingNames.IsSelfRegistrationEnabled, input.IsSelfRegistrationEnabled.ToString());
                await SettingManager.SetForCurrentTenantAsync(AccountSettingNames.EnableLocalLogin, input.EnableLocalLogin.ToString());
            }
        }

        [RequiresFeature(AccountFeature.EnableLdapLogin)]
        public virtual async Task<AccountLdapSettingsDto> GetLdapAsync()
        {
            return new AccountLdapSettingsDto
            {
                EnableLdapLogin = await SettingProvider.GetAsync<bool>(AccountSettingNames.EnableLdapLogin),
                LdapServerHost = await SettingProvider.GetOrNullAsync(LdapSettingNames.ServerHost),
                LdapServerPort = await SettingProvider.GetOrNullAsync(LdapSettingNames.ServerPort),
                LdapBaseDc = await SettingProvider.GetOrNullAsync(LdapSettingNames.BaseDc),
                LdapUserName = await SettingProvider.GetOrNullAsync(LdapSettingNames.UserName),
                //LdapPassword = await SettingProvider.GetOrNullAsync(LdapSettingNames.Password)
            };
        }

        [RequiresFeature(AccountFeature.EnableLdapLogin)]
        public virtual async Task UpdateLdapAsync(AccountLdapSettingsDto input)
        {
            if (input != null)
            {
                await SettingManager.SetForCurrentTenantAsync(AccountSettingNames.EnableLdapLogin, input.EnableLdapLogin.ToString());
                await SettingManager.SetForCurrentTenantAsync(LdapSettingNames.ServerHost, input.LdapServerHost);
                await SettingManager.SetForCurrentTenantAsync(LdapSettingNames.ServerPort, input.LdapServerPort);
                await SettingManager.SetForCurrentTenantAsync(LdapSettingNames.BaseDc, input.LdapBaseDc);
                await SettingManager.SetForCurrentTenantAsync(LdapSettingNames.UserName, input.LdapUserName);
                if (!input.LdapPassword.IsNullOrWhiteSpace())
                {
                    await SettingManager.SetForCurrentTenantAsync(LdapSettingNames.Password, input.LdapPassword);
                }
            }
        }

        public virtual async Task<AccountTwoFactorSettingsDto> GetTwoFactorAsync()
        {
            await CheckTwoFactorAvailableAsync();

            return new AccountTwoFactorSettingsDto
            {
                TwoFactorBehaviour = await IdentityTwoFactorBehaviourSettingHelper.Get(SettingProvider),
                IsRememberBrowserEnabled = await SettingProvider.GetAsync<bool>(AccountSettingNames.TwoFactorLogin.IsRememberBrowserEnabled),
                UsersCanChange = await SettingProvider.GetAsync<bool>(IdentitySettingNames.TwoFactor.UsersCanChange)
            };
        }

        public virtual async Task UpdateTwoFactorAsync(AccountTwoFactorSettingsDto input)
        {
            await CheckTwoFactorAvailableAsync();

            if (input != null)
            {
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.TwoFactor.Behaviour, input.TwoFactorBehaviour.ToString());
                if (input.TwoFactorBehaviour == IdentityTwoFactorBehaviour.Optional)
                {
                    await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.TwoFactor.UsersCanChange, input.UsersCanChange.ToString());
                }

                await SettingManager.SetForCurrentTenantAsync(AccountSettingNames.TwoFactorLogin.IsRememberBrowserEnabled, input.IsRememberBrowserEnabled.ToString());
            }
        }

        public virtual async Task<AccountExternalProviderSettingsDto> GetExternalProviderAsync()
        {
            return new AccountExternalProviderSettingsDto
            {
                Settings = await ExternalProviderSettingsHelper.GetAllAsync()
            };
        }

        public virtual async Task UpdateExternalProviderAsync(List<UpdateExternalProviderDto> input)
        {
            foreach (var setting in input)
            {
                await ExternalProviderSettingsHelper.SetAsync(new ExternalProviderSettings
                {
                    Name = setting.Name,
                    Enabled = setting.Enabled,
                    Properties = setting.Properties,
                    SecretProperties = setting.SecretProperties
                });

                await CurrentUnitOfWork.SaveChangesAsync();
            }
        }

        protected virtual async Task CheckTwoFactorAvailableAsync()
        {
            var behaviour = await IdentityTwoFactorBehaviourFeatureHelper.Get(FeatureChecker);
            if (behaviour == IdentityTwoFactorBehaviour.Disabled)
            {
                throw new BusinessException(message: L["TwoFactorHasBeenDisabled"]);
            }
        }

        public virtual async Task<AccountRecaptchaSettingsDto> GetRecaptchaAsync()
        {
            var settings = new AccountRecaptchaSettingsDto
            {
                UseCaptchaOnLogin = await SettingProvider.GetAsync<bool>(AccountSettingNames.Captcha.UseCaptchaOnLogin),
                UseCaptchaOnRegistration = await SettingProvider.GetAsync<bool>(AccountSettingNames.Captcha.UseCaptchaOnRegistration),
                VerifyBaseUrl = await SettingProvider.GetOrNullAsync(AccountSettingNames.Captcha.VerifyBaseUrl),
                SiteKey = await SettingProvider.GetOrNullAsync(AccountSettingNames.Captcha.SiteKey),
                SiteSecret = await SettingProvider.GetOrNullAsync(AccountSettingNames.Captcha.SiteSecret),
                Version = await SettingProvider.GetAsync<int>(AccountSettingNames.Captcha.Version)
            };

            if (CurrentTenant.IsAvailable)
            {
                settings.SiteKey = await SettingManager.GetOrNullForTenantAsync(AccountSettingNames.Captcha.SiteKey, CurrentTenant.GetId(), false);
                settings.SiteSecret = await SettingManager.GetOrNullForTenantAsync(AccountSettingNames.Captcha.SiteSecret, CurrentTenant.GetId(), false);
            }

            return settings;
        }

        public virtual async Task UpdateRecaptchaAsync(AccountRecaptchaSettingsDto input)
        {
            if (!CurrentTenant.IsAvailable)
            {
                if ((input.UseCaptchaOnLogin || input.UseCaptchaOnRegistration) &&
                    (input.SiteKey.IsNullOrWhiteSpace() || input.SiteSecret.IsNullOrWhiteSpace()))
                {
                    throw new UserFriendlyException(L["InvalidSiteKeyOrSiteSecret"]);
                }

                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.UseCaptchaOnLogin, input.UseCaptchaOnLogin.ToString());
                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.UseCaptchaOnRegistration, input.UseCaptchaOnRegistration.ToString());
                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.VerifyBaseUrl, input.VerifyBaseUrl);
                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.SiteKey, input.SiteKey);
                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.SiteSecret, input.SiteSecret);
                await SettingManager.SetGlobalAsync(AccountSettingNames.Captcha.Version, input.Version.ToString());
            }
            else
            {
                var globalVersion = (await SettingManager.GetOrNullGlobalAsync(AccountSettingNames.Captcha.Version)).To<int>();

                if (globalVersion != input.Version &&
                    (input.SiteKey.IsNullOrWhiteSpace() || input.SiteSecret.IsNullOrWhiteSpace()))
                {
                    throw new UserFriendlyException(L["InvalidSiteKeyOrSiteSecret"]);
                }

                await SettingManager.SetForTenantAsync(CurrentTenant.GetId(),AccountSettingNames.Captcha.Version, input.Version.ToString());
                await SettingManager.SetForTenantAsync(CurrentTenant.GetId(), AccountSettingNames.Captcha.SiteKey, input.SiteKey.IsNullOrWhiteSpace() ? null : input.SiteKey);
                await SettingManager.SetForTenantAsync(CurrentTenant.GetId(), AccountSettingNames.Captcha.SiteSecret, input.SiteSecret.IsNullOrWhiteSpace() ? null : input.SiteSecret);
            }
        }
    }
}
