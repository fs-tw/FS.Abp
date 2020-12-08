using Volo.FileManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Volo.FileManagement.Authorization
{
    public class FileManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var fileManagementGroup = context.AddGroup(FileManagementPermissions.GroupName, L("Permission:FileManagement"));

            var directoryPermission = fileManagementGroup.AddPermission(FileManagementPermissions.DirectoryDescriptor.Default, L("Permission:FileManagement:Directory"));
            directoryPermission.AddChild(FileManagementPermissions.DirectoryDescriptor.Create, L("Permission:FileManagement:Directory:Create"));
            directoryPermission.AddChild(FileManagementPermissions.DirectoryDescriptor.Update, L("Permission:FileManagement:Directory:Update"));
            directoryPermission.AddChild(FileManagementPermissions.DirectoryDescriptor.Delete, L("Permission:FileManagement:Directory:Delete"));
            
            var filePermission = fileManagementGroup.AddPermission(FileManagementPermissions.FileDescriptor.Default, L("Permission:FileManagement:File"));
            filePermission.AddChild(FileManagementPermissions.FileDescriptor.Create, L("Permission:FileManagement:File:Create"));
            filePermission.AddChild(FileManagementPermissions.FileDescriptor.Update, L("Permission:FileManagement:File:Update"));
            filePermission.AddChild(FileManagementPermissions.FileDescriptor.Delete, L("Permission:FileManagement:File:Delete"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FileManagementResource>(name);
        }
    }
}