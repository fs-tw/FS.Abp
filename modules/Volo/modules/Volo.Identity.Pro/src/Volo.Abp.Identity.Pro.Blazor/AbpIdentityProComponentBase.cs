using Volo.Abp.AspNetCore.Components;
using Volo.Abp.Identity.Localization;

namespace Volo.Abp.Identity.Pro.Blazor
{
    public abstract class AbpIdentityProComponentBase : AbpComponentBase
    {
        protected AbpIdentityProComponentBase()
        {
            LocalizationResource = typeof(IdentityResource);
            ObjectMapperContext = typeof(AbpIdentityProBlazorModule);
        }
    }
}