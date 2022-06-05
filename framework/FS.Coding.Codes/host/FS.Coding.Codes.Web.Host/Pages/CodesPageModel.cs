using FS.Coding.Codes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Coding.Codes.Pages;

public abstract class CodesPageModel : AbpPageModel
{
    protected CodesPageModel()
    {
        LocalizationResourceType = typeof(CodesResource);
    }
}
