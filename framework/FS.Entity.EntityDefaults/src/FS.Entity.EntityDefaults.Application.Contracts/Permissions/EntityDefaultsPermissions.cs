using Volo.Abp.Reflection;

namespace FS.Entity.EntityDefaults.Permissions
{
    public class EntityDefaultsPermissions
    {
        public const string GroupName = "EntityDefaults";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(EntityDefaultsPermissions));
        }
    }
}



