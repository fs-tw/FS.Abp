using FS.Abp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.Permissions
{
    public class AbpPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AbpPermissions.GroupName, L("Permission:Abp"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AbpResource>(name);
        }
    }
}