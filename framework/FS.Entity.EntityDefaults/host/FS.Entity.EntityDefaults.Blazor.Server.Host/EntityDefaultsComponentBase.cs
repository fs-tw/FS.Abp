using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Entity.EntityDefaults.Blazor.Server.Host;

public abstract class EntityDefaultsComponentBase : AbpComponentBase
{
    protected EntityDefaultsComponentBase()
    {
        LocalizationResource = typeof(EntityDefaultsResource);
    }
}
