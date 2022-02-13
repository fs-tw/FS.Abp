using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Entity.MultiLinguals.Permissions
{
    public class MultiLingualsPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(MultiLingualsPermissions.GroupName, L("Permission:MultiLinguals"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<MultiLingualsResource>(name);
        }
    }
}


