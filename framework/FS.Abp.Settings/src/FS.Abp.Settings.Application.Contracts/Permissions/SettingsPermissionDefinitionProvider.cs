using FS.Abp.Settings.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.Settings.Permissions
{
    public class SettingsPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SettingsPermissions.GroupName, L("Permission:Settings"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SettingsResource>(name);
        }
    }
}