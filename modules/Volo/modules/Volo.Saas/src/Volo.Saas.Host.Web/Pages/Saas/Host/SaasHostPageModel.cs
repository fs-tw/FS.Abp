using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Saas.Host.Pages.Saas.Host
{
    public abstract class SaasHostPageModel : AbpPageModel
    {
        public SaasHostPageModel()
        {
            ObjectMapperContext = typeof(SaasHostWebModule);
        }
    }
}