using FS.LineNotify.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.LineNotify.Permissions
{
    public class LineNotifyPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(LineNotifyPermissions.GroupName, L("Permission:LineNotify"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<LineNotifyResource>(name);
        }
    }
}