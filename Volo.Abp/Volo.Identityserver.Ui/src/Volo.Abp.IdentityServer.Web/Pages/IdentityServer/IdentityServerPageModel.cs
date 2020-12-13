using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer
{
    public abstract class IdentityServerPageModel : AbpPageModel
    {
        protected IdentityServerPageModel()
        {
            ObjectMapperContext = typeof(AbpIdentityServerWebModule);
        }
    }
}