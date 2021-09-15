using CrystalQuartzSample.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CrystalQuartzSample.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class CrystalQuartzSampleController : AbpController
    {
        protected CrystalQuartzSampleController()
        {
            LocalizationResource = typeof(CrystalQuartzSampleResource);
        }
    }
}