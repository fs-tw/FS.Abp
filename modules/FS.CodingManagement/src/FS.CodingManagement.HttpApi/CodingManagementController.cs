using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CodingManagement
{
    public abstract class CodingManagementController : AbpController
    {
        protected CodingManagementController()
        {
            LocalizationResource = typeof(CodingResource);
        }
    }
}
