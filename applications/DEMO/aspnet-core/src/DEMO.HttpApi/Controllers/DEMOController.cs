using DEMO.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DEMO.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DEMOController : AbpController
    {
        protected DEMOController()
        {
            LocalizationResource = typeof(DEMOResource);
        }
    }
}