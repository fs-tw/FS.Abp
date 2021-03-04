using FS.Cms.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Cms
{
    public abstract class CmsController : AbpController
    {
        protected CmsController()
        {
            LocalizationResource = typeof(CmsResource);
        }
    }
}
