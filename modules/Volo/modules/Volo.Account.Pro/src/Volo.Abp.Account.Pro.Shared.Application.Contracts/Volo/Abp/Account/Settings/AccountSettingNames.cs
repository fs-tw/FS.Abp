namespace Volo.Abp.Account.Settings
{
    public static class AccountSettingNames
    {
        public const string IsSelfRegistrationEnabled = "Abp.Account.IsSelfRegistrationEnabled";

        public const string EnableLocalLogin = "Abp.Account.EnableLocalLogin";

        public const string EnableLdapLogin = "Abp.Account.EnableLdapLogin";

        public const string ProfilePictureSource = "Abp.Account.ProfilePictureSource";

        public static class TwoFactorLogin
        {
            public const string IsRememberBrowserEnabled = "Abp.Account.TwoFactorLogin.IsRememberBrowserEnabled";
        }

        public class Captcha
        {
            public const string UseCaptchaOnRegistration = "Abp.Account.Captcha.UseCaptchaOnRegistration";

            public const string UseCaptchaOnLogin = "Abp.Account.Captcha.UseCaptchaOnLogin";

            public const string VerifyBaseUrl = "Abp.Account.Captcha.VerifyBaseUrl";

            public const string SiteKey = "Abp.Account.Captcha.SiteKey";

            public const string SiteSecret = "Abp.Account.Captcha.SiteSecret";

            public const string Version = "Abp.Account.Captcha.Version";
        }

        public const string ExternalProviders = "Abp.Account.ExternalProviders";
    }
}
