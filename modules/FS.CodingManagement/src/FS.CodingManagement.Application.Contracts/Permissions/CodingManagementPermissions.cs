using Volo.Abp.Reflection;

namespace FS.CodingManagement.Permissions
{
    public class CodingManagementPermissions
    {
        public const string GroupName = "CodingManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CodingManagementPermissions));
        }
    }
}