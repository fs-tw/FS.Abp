using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.EntityDefaults.Pages;

public abstract class EntityDefaultsPageModel : AbpPageModel
{
    protected EntityDefaultsPageModel()
    {
        LocalizationResourceType = typeof(EntityDefaultsResource);
    }
}
