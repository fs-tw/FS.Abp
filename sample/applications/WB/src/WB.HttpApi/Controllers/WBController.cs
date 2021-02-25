using WB.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace WB
{
    /* Inherit your controllers from this class.
     */
    public abstract class WBController : AbpController
    {
        protected WBController()
        {
            LocalizationResource = typeof(WBResource);
        }
    }
}