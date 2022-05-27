using Volo.Abp.Reflection;

namespace FS.Abp.SyncTable.Permissions;

public class SyncTablePermissions
{
    public const string GroupName = "SyncTable";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(SyncTablePermissions));
    }
}
