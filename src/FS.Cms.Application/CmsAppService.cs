using FS.Cms.Localization;
using Volo.Abp.Application.Services;

namespace FS.Cms
{
    public abstract class CmsAppService : ApplicationService
    {
        protected CmsAppService()
        {
            LocalizationResource = typeof(CmsResource);
        }
    }
}
