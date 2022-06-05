using FS.PrinterManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.PrinterManagement.Permissions
{
    public class PrinterManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void PreDefine(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(PrinterManagementPermissions.GroupName, L("Permission:PrinterManagement"));
        }
        public override void Define(IPermissionDefinitionContext context)
        {
           
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PrinterManagementResource>(name);
        }
    }
}