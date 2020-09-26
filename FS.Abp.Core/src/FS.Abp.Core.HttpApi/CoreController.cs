using FS.Abp.Core.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Core
{
    public abstract class CoreController : AbpController
    {
        protected CoreController()
        {
            LocalizationResource = typeof(AbpCoreResource);
        }
    }
}
