using FS.Theme.TheProject.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Theme.TheProject.Permissions
{
    public class TheProjectPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(TheProjectPermissions.GroupName, L("Permission:TheProject"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<TheProjectResource>(name);
        }
    }
}