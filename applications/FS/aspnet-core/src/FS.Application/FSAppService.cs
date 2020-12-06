using FS.Localization;
using Volo.Abp.Application.Services;

namespace FS
{
    /* Inherit your application services from this class.
     */
    public abstract class FSAppService : ApplicationService
    {
        protected FSAppService()
        {
            LocalizationResource = typeof(FSResource);
        }
    }
}
