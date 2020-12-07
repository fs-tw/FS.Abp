using Volo.Chat.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Chat
{
    public abstract class ChatController : AbpController
    {
        protected ChatController()
        {
            LocalizationResource = typeof(ChatResource);
        }
    }
}
