using Volo.Abp.Reflection;

namespace FS.Abp.Permissions
{
    public class AbpPermissions
    {
        public const string GroupName = "Abp";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(AbpPermissions));
        }
    }
}