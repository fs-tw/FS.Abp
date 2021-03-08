using FS.YC.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.YC.Permissions
{
    public class YCPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(YCPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(YCPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<YCResource>(name);
        }
    }
}
