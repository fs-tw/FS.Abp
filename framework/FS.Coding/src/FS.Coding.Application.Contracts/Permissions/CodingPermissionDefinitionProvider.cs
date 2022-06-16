using FS.Coding.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Coding.Permissions;

public class CodingPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void PreDefine(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(CodingPermissions.GroupName, L("Permission:Coding"));
    }
    public override void Define(IPermissionDefinitionContext context)
    {
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<CodingResource>(name);
    }
}
