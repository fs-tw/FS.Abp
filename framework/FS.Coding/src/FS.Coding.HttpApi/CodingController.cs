using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Coding;

public abstract class CodingController : AbpControllerBase
{
    protected CodingController()
    {
        LocalizationResource = typeof(CodingResource);
    }
}
