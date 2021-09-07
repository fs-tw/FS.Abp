using FS.CodingManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.CodingManagement.Permissions
{
    public class CodingManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CodingManagementPermissions.GroupName, L("Permission:CodingManagement"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CodingManagementResource>(name);
        }
    }
}