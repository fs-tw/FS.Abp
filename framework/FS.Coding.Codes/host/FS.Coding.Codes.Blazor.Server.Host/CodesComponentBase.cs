using FS.Coding.Codes.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Coding.Codes.Blazor.Server.Host;

public abstract class CodesComponentBase : AbpComponentBase
{
    protected CodesComponentBase()
    {
        LocalizationResource = typeof(CodesResource);
    }
}
