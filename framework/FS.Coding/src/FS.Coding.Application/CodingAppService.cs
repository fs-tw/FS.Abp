using FS.Coding.Localization;
using Volo.Abp.Application.Services;

namespace FS.Coding;

public abstract class CodingAppService : ApplicationService
{
    protected CodingAppService()
    {
        LocalizationResource = typeof(CodingResource);
        ObjectMapperContext = typeof(CodingApplicationModule);
    }
}
