using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.Emailing
{
    public class EmailingPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var identityGroup = context.AddGroup(EmailingPermissions.GroupName, L("Permission:Emailing"));

            identityGroup.AddPermission(EmailingPermissions.SettingManagement, L("Permission:SettingManagement"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<Volo.Abp.Emailing.Localization.EmailingResource>(name);
        }
    }
}
