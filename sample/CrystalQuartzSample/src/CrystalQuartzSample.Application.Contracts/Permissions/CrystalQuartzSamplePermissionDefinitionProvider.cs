using CrystalQuartzSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CrystalQuartzSample.Permissions
{
    public class CrystalQuartzSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CrystalQuartzSamplePermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(CrystalQuartzSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CrystalQuartzSampleResource>(name);
        }
    }
}
