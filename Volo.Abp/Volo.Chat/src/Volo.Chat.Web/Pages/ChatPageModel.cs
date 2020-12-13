using Volo.Chat.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Chat.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ChatPageModel : AbpPageModel
    {
        protected ChatPageModel()
        {
            LocalizationResourceType = typeof(ChatResource);
            ObjectMapperContext = typeof(ChatWebModule);
        }
    }
}