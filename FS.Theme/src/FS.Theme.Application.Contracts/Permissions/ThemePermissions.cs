using Volo.Abp.Reflection;

namespace FS.Theme.Permissions
{
    public class ThemePermissions
    {
        public const string GroupName = "Theme";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(ThemePermissions));
        }
    }
}