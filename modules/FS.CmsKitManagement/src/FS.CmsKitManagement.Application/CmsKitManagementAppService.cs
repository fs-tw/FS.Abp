using FS.CmsKitManagement.Localization;
using FS.CmsKitManagement.Routes;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementAppService : ApplicationService
    {
        protected IRoutesStore RoutesStore => this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();

        protected CmsKitManagementAppService()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
            ObjectMapperContext = typeof(CmsKitManagementApplicationModule);
        }
    }
}
