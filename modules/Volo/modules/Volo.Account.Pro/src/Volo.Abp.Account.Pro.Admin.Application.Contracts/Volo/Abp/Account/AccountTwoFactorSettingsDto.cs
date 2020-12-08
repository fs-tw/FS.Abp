using Volo.Abp.Identity.Features;

namespace Volo.Abp.Account
{
    public class AccountTwoFactorSettingsDto
    {
        public IdentityTwoFactorBehaviour TwoFactorBehaviour { get; set; }

        public bool IsRememberBrowserEnabled { get; set; }

        public bool UsersCanChange { get; set; }
    }
}
