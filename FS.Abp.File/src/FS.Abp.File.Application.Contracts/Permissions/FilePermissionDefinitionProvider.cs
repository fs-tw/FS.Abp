using FS.Abp.File.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.File.Permissions
{
    public class FilePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(FilePermissions.GroupName, L("Permission:File"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FileResource>(name);
        }
    }
}