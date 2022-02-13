using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.MultiLinguals.Pages;

public abstract class MultiLingualsPageModel : AbpPageModel
{
    protected MultiLingualsPageModel()
    {
        LocalizationResourceType = typeof(MultiLingualsResource);
    }
}
