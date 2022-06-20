using FS.Abp.Identity.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Identity;

public abstract class IdentityAppService : ApplicationService
{
    protected IdentityAppService()
    {
        LocalizationResource = typeof(IdentityResource);
        ObjectMapperContext = typeof(IdentityApplicationModule);
    }
}
