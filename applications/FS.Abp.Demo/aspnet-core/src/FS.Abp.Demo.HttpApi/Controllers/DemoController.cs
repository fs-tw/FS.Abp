using FS.Abp.Demo.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Demo.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DemoController : AbpController
    {
        protected DemoController()
        {
            LocalizationResource = typeof(DemoResource);
        }
    }
}