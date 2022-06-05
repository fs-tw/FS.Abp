using Volo.Abp.Reflection;

namespace FS.Printer.Permissions;

public class PrinterPermissions
{
    public const string GroupName = "PrinterManagement";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(PrinterPermissions));
    }
}
