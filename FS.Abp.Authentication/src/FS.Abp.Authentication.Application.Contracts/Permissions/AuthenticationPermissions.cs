using Volo.Abp.Reflection;

namespace FS.Abp.Authentication.Permissions
{
    public class AuthenticationPermissions
    {
        public const string GroupName = "Authentication";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(AuthenticationPermissions));
        }
    }
}