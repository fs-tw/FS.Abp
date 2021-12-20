using CFTA.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CFTA.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class CFTAController : AbpController
    {
        protected CFTAController()
        {
            LocalizationResource = typeof(CFTAResource);
        }
    }
}