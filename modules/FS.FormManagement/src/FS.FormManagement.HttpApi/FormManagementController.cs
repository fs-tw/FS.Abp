using FS.FormManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.FormManagement
{
    public abstract class FormManagementController : AbpController
    {
        protected FormManagementController()
        {
            LocalizationResource = typeof(FormManagementResource);
        }
    }
}
