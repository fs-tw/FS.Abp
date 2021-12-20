using CFTA.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CFTA.Permissions
{
    public class CFTAPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CFTAPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(CFTAPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CFTAResource>(name);
        }
    }
}
