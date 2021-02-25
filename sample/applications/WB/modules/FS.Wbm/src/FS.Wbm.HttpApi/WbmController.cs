using FS.Wbm.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Wbm
{
    public abstract class WbmController : AbpController
    {
        protected WbmController()
        {
            LocalizationResource = typeof(WbmResource);
        }
    }
}
