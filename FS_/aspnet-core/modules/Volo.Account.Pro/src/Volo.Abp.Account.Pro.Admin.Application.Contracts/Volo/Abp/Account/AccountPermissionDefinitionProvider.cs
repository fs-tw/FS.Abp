using Volo.Abp.Account.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Volo.Abp.Account
{
    public class AccountPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var identityGroup = context.AddGroup(AccountPermissions.GroupName, L("Permission:Account"));

            identityGroup.AddPermission(AccountPermissions.SettingManagement, L("Permission:SettingManagement"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AccountResource>(name);
        }
    }
}
