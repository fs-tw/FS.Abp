using Volo.Abp.Reflection;

namespace FS.Abp.File.Permissions
{
    public class FilePermissions
    {
        public const string GroupName = "File";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(FilePermissions));
        }
    }
}