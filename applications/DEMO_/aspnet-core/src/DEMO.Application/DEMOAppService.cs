using DEMO.Localization;
using Volo.Abp.Application.Services;

namespace DEMO
{
    /* Inherit your application services from this class.
     */
    public abstract class DEMOAppService : ApplicationService
    {
        protected DEMOAppService()
        {
            LocalizationResource = typeof(DEMOResource);
        }
    }
}
