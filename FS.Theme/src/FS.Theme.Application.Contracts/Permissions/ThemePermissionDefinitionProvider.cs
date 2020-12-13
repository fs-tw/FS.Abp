using FS.Theme.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Theme.Permissions
{
    public class ThemePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ThemePermissions.GroupName, L("Permission:Theme"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemeResource>(name);
        }
    }
}