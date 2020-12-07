using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Views.Error;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Views.Error.DefaultErrorComponent
{
    public class LeptonErrorViewComponent : LeptonViewComponentBase
    {
        public IViewComponentResult Invoke(AbpErrorViewModel model, string defaultErrorMessageKey)
        {
            var leptonModel =  new LeptonErrorPageModel
            {
                ErrorInfo = model.ErrorInfo,
                HttpStatusCode = model.HttpStatusCode,
                DefaultErrorMessageKey = defaultErrorMessageKey
            };

            return View("~/Views/Error/DefaultErrorComponent/Default.cshtml", leptonModel);
        }
    }
}
