using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Entity.EntityDefaults;

public abstract class EntityDefaultsController : AbpControllerBase
{
    protected EntityDefaultsController()
    {
        LocalizationResource = typeof(EntityDefaultsResource);
    }
}
