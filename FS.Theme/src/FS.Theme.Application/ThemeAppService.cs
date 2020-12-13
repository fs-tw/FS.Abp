using FS.Theme.Localization;
using Volo.Abp.Application.Services;

namespace FS.Theme
{
    public abstract class ThemeAppService : ApplicationService
    {
        protected ThemeAppService()
        {
            LocalizationResource = typeof(ThemeResource);
            ObjectMapperContext = typeof(ThemeApplicationModule);
        }
    }
}
