using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Views.Error;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Views.Error.DefaultErrorComponent
{
    public class LeptonErrorPageModel : AbpErrorViewModel
    {
        public string DefaultErrorMessageKey { get; set; }
    }
}