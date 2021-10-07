using FS.Abp.EntityTypes.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.EntityTypes
{
    public abstract class EntityTypesAppService : ApplicationService
    {
        protected EntityTypesAppService()
        {
            LocalizationResource = typeof(EntityTypesResource);
            ObjectMapperContext = typeof(EntityTypesApplicationModule);
        }
    }
}
