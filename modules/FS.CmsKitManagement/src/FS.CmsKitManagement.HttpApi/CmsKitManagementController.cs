using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementController : AbpController
    {
        protected CmsKitManagementController()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
        }
    }
}
