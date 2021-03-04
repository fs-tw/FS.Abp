using Volo.Abp.Reflection;

namespace FS.Cms.Authorization
{
    public class CmsPermissions
    {
        public const string GroupName = "Cms";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CmsPermissions));
        }
    }
}