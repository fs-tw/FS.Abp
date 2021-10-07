using Volo.Abp.Reflection;

namespace FS.Abp.EntityTypes.Permissions
{
    public class EntityTypesPermissions
    {
        public const string GroupName = "EntityTypes";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(EntityTypesPermissions));
        }
    }
}