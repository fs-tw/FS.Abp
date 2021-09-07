using FS.CodingManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CodingManagement
{
    public abstract class CodingManagementController : AbpController
    {
        protected CodingManagementController()
        {
            LocalizationResource = typeof(CodingManagementResource);
        }
    }
}
