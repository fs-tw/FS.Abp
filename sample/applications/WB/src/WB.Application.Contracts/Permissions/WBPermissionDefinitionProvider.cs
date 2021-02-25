using WB.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace WB.Permissions
{
    public class WBPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(WBPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(WBPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<WBResource>(name);
        }
    }
}
