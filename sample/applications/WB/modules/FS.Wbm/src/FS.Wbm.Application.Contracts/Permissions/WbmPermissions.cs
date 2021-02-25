using Volo.Abp.Reflection;

namespace FS.Wbm.Permissions
{
    public class WbmPermissions
    {
        public const string GroupName = "Wbm";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(WbmPermissions));
        }
    }
}