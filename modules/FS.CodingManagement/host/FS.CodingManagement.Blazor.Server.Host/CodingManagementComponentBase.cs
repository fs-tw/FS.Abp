using FS.CodingManagement.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.CodingManagement.Blazor.Server.Host
{
    public abstract class CodingManagementComponentBase : AbpComponentBase
    {
        protected CodingManagementComponentBase()
        {
            LocalizationResource = typeof(CodingManagementResource);
        }
    }
}
