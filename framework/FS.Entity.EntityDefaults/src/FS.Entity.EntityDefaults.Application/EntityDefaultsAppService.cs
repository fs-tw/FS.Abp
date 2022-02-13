using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.Application.Services;

namespace FS.Entity.EntityDefaults
{
    public abstract class EntityDefaultsAppService : ApplicationService
    {
        protected EntityDefaultsAppService()
        {
            LocalizationResource = typeof(EntityDefaultsResource);
            ObjectMapperContext = typeof(EntityDefaultsApplicationModule);
        }
    }
}


