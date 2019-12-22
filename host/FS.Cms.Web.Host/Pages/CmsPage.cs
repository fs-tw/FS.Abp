using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Cms.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Cms.Pages
{
    public abstract class CmsPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<CmsResource> L { get; set; }
    }
}
