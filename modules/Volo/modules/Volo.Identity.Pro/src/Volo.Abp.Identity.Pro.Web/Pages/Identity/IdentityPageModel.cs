using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.Identity.Web.Pages.Identity
{
    public abstract class IdentityPageModel : AbpPageModel
    {
        public IdentityPageModel()
        {
            ObjectMapperContext = typeof(AbpIdentityWebModule);
        }
    }
}