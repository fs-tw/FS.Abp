using Volo.Abp.Authorization.Permissions;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.Localization;

namespace Volo.Abp.LeptonTheme.Management.Permissions
{
    public class LeptonThemeManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(LeptonThemeManagementPermissions.GroupName, L("Permission:LeptonThemeManagement"));

            myGroup.AddPermission(LeptonThemeManagementPermissions.Settings.SettingsGroup, L("Permission:LeptonThemeSettings"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<LeptonThemeManagementResource>(name);
        }
    }
}
