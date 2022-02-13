using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.EntityFeatures.Pages;

public abstract class EntityFeaturesPageModel : AbpPageModel
{
    protected EntityFeaturesPageModel()
    {
        LocalizationResourceType = typeof(EntityFeaturesResource);
    }
}
