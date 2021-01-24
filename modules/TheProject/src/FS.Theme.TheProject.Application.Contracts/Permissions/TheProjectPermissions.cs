using Volo.Abp.Reflection;

namespace FS.Theme.TheProject.Permissions
{
    public class TheProjectPermissions
    {
        public const string GroupName = "TheProject";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(TheProjectPermissions));
        }
    }
}