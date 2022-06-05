using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Coding.Pages;

public abstract class CodingPageModel : AbpPageModel
{
    protected CodingPageModel()
    {
        LocalizationResourceType = typeof(CodingResource);
    }
}
