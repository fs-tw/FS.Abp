using Volo.Abp.Reflection;

namespace FS.CmsKitManagement.Permissions
{
    public class CmsKitManagementPermissions
    {
        public const string GroupName = "CmsKitManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CmsKitManagementPermissions));
        }
    }
}