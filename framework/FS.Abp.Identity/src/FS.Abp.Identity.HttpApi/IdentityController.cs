using FS.Abp.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Identity;

public abstract class IdentityController : AbpControllerBase
{
    protected IdentityController()
    {
        LocalizationResource = typeof(IdentityResource);
    }
}
