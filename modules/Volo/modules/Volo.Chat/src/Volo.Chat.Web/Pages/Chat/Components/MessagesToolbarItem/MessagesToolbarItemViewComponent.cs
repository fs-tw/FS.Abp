using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Chat.Web.Pages.Chat.Components.MessagesToolbarItem
{
    public class MessagesToolbarItemViewComponent : AbpViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View("/Pages/Chat/Components/MessagesToolbarItem/Default.cshtml");
        }
    }
}
