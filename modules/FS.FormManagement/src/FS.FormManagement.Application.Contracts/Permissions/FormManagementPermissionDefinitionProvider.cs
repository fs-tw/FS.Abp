using FS.FormManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.FormManagement.Permissions
{
    public class FormManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(FormManagementPermissions.GroupName, L("Permission:FormManagement"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FormManagementResource>(name);
        }
    }
}