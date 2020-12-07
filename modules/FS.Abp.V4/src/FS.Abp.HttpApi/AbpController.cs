using FS.Abp.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp
{
    public abstract class AbpController : Volo.Abp.AspNetCore.Mvc.AbpController
    {
        protected AbpController()
        {
            LocalizationResource = typeof(AbpResource);
        }
    }
}
