using FS.Wbm.Localization;
using Volo.Abp.Application.Services;

namespace FS.Wbm
{
    public abstract class WbmAppService : ApplicationService
    {
        protected WbmAppService()
        {
            LocalizationResource = typeof(WbmResource);
            ObjectMapperContext = typeof(WbmApplicationModule);
        }
    }
}
