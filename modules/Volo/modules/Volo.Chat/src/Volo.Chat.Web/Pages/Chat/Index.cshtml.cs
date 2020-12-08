using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.Features;

namespace Volo.Chat.Web.Pages.Chat
{
    [RequiresFeature(ChatFeatures.Enable)]
    public class IndexModel : AbpPageModel
    {
        public void OnGet()
        {
        }
    }
}
