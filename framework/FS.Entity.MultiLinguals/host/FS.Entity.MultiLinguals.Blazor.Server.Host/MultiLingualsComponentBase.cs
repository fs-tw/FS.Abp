using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Entity.MultiLinguals.Blazor.Server.Host;

public abstract class MultiLingualsComponentBase : AbpComponentBase
{
    protected MultiLingualsComponentBase()
    {
        LocalizationResource = typeof(MultiLingualsResource);
    }
}
