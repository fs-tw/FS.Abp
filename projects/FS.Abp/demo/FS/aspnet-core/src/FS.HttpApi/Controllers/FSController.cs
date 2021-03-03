using FS.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS
{
    /* Inherit your controllers from this class.
     */
    public abstract class FSController : AbpController
    {
        protected FSController()
        {
            LocalizationResource = typeof(FSResource);
        }
    }
}