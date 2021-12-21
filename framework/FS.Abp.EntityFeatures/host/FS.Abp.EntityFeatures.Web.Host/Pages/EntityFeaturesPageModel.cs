using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.EntityFeatures.Pages
{
    public abstract class EntityFeaturesPageModel : AbpPageModel
    {
        protected EntityFeaturesPageModel()
        {
            LocalizationResourceType = typeof(EntityFeaturesResource);
        }
    }
}