using Volo.Abp.Reflection;

namespace FS.FormManagement.Permissions
{
    public class FormManagementPermissions
    {
        public const string GroupName = "FormManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(FormManagementPermissions));
        }
    }
}