using Volo.Abp.Account.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Settings;

namespace Volo.Abp.Account.Settings
{
    public class AccountSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                new SettingDefinition(AccountSettingNames.IsSelfRegistrationEnabled, "true",
                    L("DisplayName:IsSelfRegistrationEnabled"),
                    L("Description:IsSelfRegistrationEnabled"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.EnableLocalLogin, "true",
                    L("DisplayName:EnableLocalLogin"),
                    L("Description:EnableLocalLogin"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.TwoFactorLogin.IsRememberBrowserEnabled, "true",
                    L("DisplayName:IsRememberBrowserEnabled"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.EnableLdapLogin, "false",
                    L("DisplayName:EnableLdapLogin"),
                    L("Description:EnableLdapLogin"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.Captcha.UseCaptchaOnLogin, "false",
                    L("DisplayName:UseCaptchaOnLogin"),
                    L("Description:UseCaptchaOnLogin"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.Captcha.UseCaptchaOnRegistration, "false",
                    L("DisplayName:UseCaptchaOnRegistration"),
                    L("Description:UseCaptchaOnRegistration"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.Captcha.VerifyBaseUrl, "https://www.google.com/",
                    L("DisplayName:VerifyBaseUrl"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.Captcha.SiteKey, null,
                        L("DisplayName:SiteKey"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.Captcha.SiteSecret, null,
                    L("DisplayName:SiteSecret"), isVisibleToClients : false),

                new SettingDefinition(AccountSettingNames.Captcha.Version, "3",
                        L("DisplayName:Version"), isVisibleToClients : true),

                new SettingDefinition(AccountSettingNames.ProfilePictureSource, false.ToString(),
                    L("DisplayName:UseGravatar"),
                    L("Description:UseGravatar"), isVisibleToClients: true),

                new SettingDefinition(AccountSettingNames.ExternalProviders, isVisibleToClients: false)
            );
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AccountResource>(name);
        }
    }
}
