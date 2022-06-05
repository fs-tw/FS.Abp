using FS.Coding.Localization;
using FS.Coding.Permissions;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Coding.Codes.Permissions;

public class CodesPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void PreDefine(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(CodingPermissions.GroupName, L("Permission:Codes"));
    }

    public override void Define(IPermissionDefinitionContext context)
    {
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<CodingResource>(name);
    }


}
