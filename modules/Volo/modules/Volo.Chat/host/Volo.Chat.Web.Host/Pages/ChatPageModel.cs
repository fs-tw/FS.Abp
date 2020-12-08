using Volo.Chat.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Chat.Pages
{
    public abstract class ChatPageModel : AbpPageModel
    {
        protected ChatPageModel()
        {
            LocalizationResourceType = typeof(ChatResource);
        }
    }
}