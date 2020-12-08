using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Account.Localization;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.LinkUsers;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.Password;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.PersonalInfo;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.ProfilePicture;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.TwoFactor;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Settings;
using Volo.Abp.Users;

namespace Volo.Abp.Account.Public.Web.ProfileManagement
{
    public class AccountProfileManagementPageContributor : IProfileManagementPageContributor
    {
        public async Task ConfigureAsync(ProfileManagementPageCreationContext context)
        {
            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<AccountResource>>();

            context.Groups.Add(
                new ProfileManagementPageGroup(
                    "Volo-Abp-Account-Picture",
                    l["ProfileTab:Picture"],
                    typeof(AccountProfilePictureManagementGroupViewComponent)
                )
            );

            if (await IsPasswordChangeEnabled(context))
            {
                context.Groups.Add(
                    new ProfileManagementPageGroup(
                        "Volo-Abp-Account-Password",
                        l["ProfileTab:Password"],
                        typeof(AccountProfilePasswordManagementGroupViewComponent)
                    )
                );
            }

            context.Groups.Add(
                new ProfileManagementPageGroup(
                    "Volo-Abp-Account-PersonalInfo",
                    l["ProfileTab:PersonalInfo"],
                    typeof(AccountProfilePersonalInfoManagementGroupViewComponent)
                )
            );

            var identityTwoFactorManager = context.ServiceProvider.GetRequiredService<IdentityTwoFactorManager>();
            var settingProvider = context.ServiceProvider.GetRequiredService<ISettingProvider>();
            if (await identityTwoFactorManager.IsOptionalAsync() &&
                await settingProvider.GetAsync<bool>(IdentitySettingNames.TwoFactor.UsersCanChange))
            {
                context.Groups.Add(
                    new ProfileManagementPageGroup(
                        "Volo-Abp-Account-TwoFactor",
                        l["ProfileTab:TwoFactor"],
                        typeof(AccountProfileTwoFactorManagementGroupViewComponent)
                    )
                );
            }

            context.Groups.Add(
                new ProfileManagementPageGroup(
                    "Volo-Abp-Account-LinkUsers",
                    l["ProfileTab:LinkUsers"],
                    typeof(AccountProfileLinkUsersManagementGroupViewComponent)
                )
            );
        }

        protected virtual async Task<bool> IsPasswordChangeEnabled(ProfileManagementPageCreationContext context)
        {
            var userManager = context.ServiceProvider.GetRequiredService<IdentityUserManager>();
            var currentUser = context.ServiceProvider.GetRequiredService<ICurrentUser>();

            var user = await userManager.GetByIdAsync(currentUser.GetId());

            return !user.IsExternal;
        }
    }
}
