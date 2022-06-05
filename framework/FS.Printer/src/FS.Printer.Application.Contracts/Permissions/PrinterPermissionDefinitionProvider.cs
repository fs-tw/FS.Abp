using FS.Printer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Printer.Permissions;

public class PrinterPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PrinterPermissions.GroupName, L("Permission:Printer"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PrinterResource>(name);
    }
}
