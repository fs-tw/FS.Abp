using Volo.Abp.Reflection;

namespace FS.Entity.MultiLinguals.Permissions
{
    public class MultiLingualsPermissions
    {
        public const string GroupName = "MultiLinguals";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(MultiLingualsPermissions));
        }
    }
}


