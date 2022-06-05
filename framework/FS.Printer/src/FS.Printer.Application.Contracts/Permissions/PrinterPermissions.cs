using Volo.Abp.Reflection;

namespace FS.Printer.Permissions;

public class PrinterPermissions
{
    public const string GroupName = "Printer";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(PrinterPermissions));
    }
}
