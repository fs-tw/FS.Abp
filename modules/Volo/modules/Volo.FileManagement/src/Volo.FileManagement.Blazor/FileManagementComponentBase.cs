using Volo.Abp.AspNetCore.Components;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Blazor
{
    public abstract class FileManagementComponentBase : AbpComponentBase
    {
        protected FileManagementComponentBase()
        {
            LocalizationResource = typeof(FileManagementResource);
            ObjectMapperContext = typeof(FileManagementBlazorModule);
        }
    }
}
