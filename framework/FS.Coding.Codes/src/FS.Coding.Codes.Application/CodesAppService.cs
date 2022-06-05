using FS.Coding.Localization;
using Volo.Abp.Application.Services;

namespace FS.Coding.Codes;

public abstract class CodesAppService : ApplicationService
{
    protected CodesAppService()
    {
        LocalizationResource = typeof(CodingResource);
        ObjectMapperContext = typeof(CodesApplicationModule);
    }
}
