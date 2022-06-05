using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Coding.Codes;

public abstract class CodesController : AbpControllerBase
{
    protected CodesController()
    {
        LocalizationResource = typeof(CodingResource);
    }
}
