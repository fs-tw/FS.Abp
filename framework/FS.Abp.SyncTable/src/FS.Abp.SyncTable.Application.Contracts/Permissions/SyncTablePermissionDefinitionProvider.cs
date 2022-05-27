using FS.Abp.SyncTable.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.SyncTable.Permissions;

public class SyncTablePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(SyncTablePermissions.GroupName, L("Permission:SyncTable"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SyncTableResource>(name);
    }
}
