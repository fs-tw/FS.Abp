using FS.Wbm.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Wbm.Permissions
{
    public class WbmPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(WbmPermissions.GroupName, L("Permission:Wbm"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<WbmResource>(name);
        }
    }
}