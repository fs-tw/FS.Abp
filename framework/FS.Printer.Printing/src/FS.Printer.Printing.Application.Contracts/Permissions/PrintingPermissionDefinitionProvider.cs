using FS.Printer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Printer.Printing.Permissions;

public class PrintingPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(FS.Printer.Permissions.PrinterPermissions.GroupName, L("Permission:Printing"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PrinterResource>(name);
    }
}
