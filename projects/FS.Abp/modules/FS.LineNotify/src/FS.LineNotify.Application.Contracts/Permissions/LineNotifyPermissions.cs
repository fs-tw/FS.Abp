using Volo.Abp.Reflection;

namespace FS.LineNotify.Permissions
{
    public class LineNotifyPermissions
    {
        public const string GroupName = "LineNotify";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(LineNotifyPermissions));
        }
    }
}