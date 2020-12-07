using FS.Abp.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp
{
    public abstract class AbpAppService : ApplicationService
    {
        protected AbpAppService()
        {
            LocalizationResource = typeof(AbpResource);
            ObjectMapperContext = typeof(AbpApplicationModule);
        }
    }
}
