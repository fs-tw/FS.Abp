using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Coding.Blazor.Server.Host;

public abstract class CodingComponentBase : AbpComponentBase
{
    protected CodingComponentBase()
    {
        LocalizationResource = typeof(CodingResource);
    }
}
