using FS.Abp.Core.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Core
{
    public abstract class CoreAppService : ApplicationService
    {
        protected CoreAppService()
        {
            LocalizationResource = typeof(AbpCoreResource);
            ObjectMapperContext = typeof(CoreApplicationModule);
        }
    }
}
