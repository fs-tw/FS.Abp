using FS.Abp.Identity.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.Identity.Blazor.Server.Host;

public abstract class IdentityComponentBase : AbpComponentBase
{
    protected IdentityComponentBase()
    {
        LocalizationResource = typeof(IdentityResource);
    }
}
