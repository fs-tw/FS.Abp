using Volo.Abp.Reflection;

namespace FS.Coding.Permissions;

public class CodingPermissions
{
    public const string GroupName = "CodingManagement";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(CodingPermissions));
    }
}
