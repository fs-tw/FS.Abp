using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Volo.FileManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.FileManagement.Web.Pages
{
    public abstract class FileManagementPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<FileManagementResource> L { get; set; }
    }
}
