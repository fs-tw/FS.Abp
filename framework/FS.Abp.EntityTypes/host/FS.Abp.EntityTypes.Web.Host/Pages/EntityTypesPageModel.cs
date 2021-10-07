using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.EntityTypes.Pages
{
    public abstract class EntityTypesPageModel : AbpPageModel
    {
        protected EntityTypesPageModel()
        {
            LocalizationResourceType = typeof(EntityTypesResource);
        }
    }
}