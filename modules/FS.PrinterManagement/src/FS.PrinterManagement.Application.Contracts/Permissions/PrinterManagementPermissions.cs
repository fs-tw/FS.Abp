using Volo.Abp.Reflection;

namespace FS.PrinterManagement.Permissions
{
    public class PrinterManagementPermissions
    {
        public const string GroupName = "PrinterManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(PrinterManagementPermissions));
        }
    }
}