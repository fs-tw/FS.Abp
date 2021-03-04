using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Cms.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Cms.Web.Pages
{
    /* Inherit your UI Pages from this class. To do that, add this line to your Pages (.cshtml files under the Page folder):
     * @inherits FS.Cms.Web.Pages.CmsPage
     */
    public abstract class CmsPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<CmsResource> L { get; set; }
    }
}
