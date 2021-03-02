using FS.Abp.Authentication.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.Authentication.Permissions
{
    public class AuthenticationPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AuthenticationPermissions.GroupName, L("Permission:Authentication"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AbpAuthenticationResource>(name);
        }
    }
}