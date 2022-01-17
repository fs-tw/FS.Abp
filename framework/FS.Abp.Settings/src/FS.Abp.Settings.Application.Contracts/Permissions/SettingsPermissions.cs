using Volo.Abp.Reflection;

namespace FS.Abp.Settings.Permissions
{
    public class SettingsPermissions
    {
        public const string GroupName = "Settings";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(SettingsPermissions));
        }
    }
}