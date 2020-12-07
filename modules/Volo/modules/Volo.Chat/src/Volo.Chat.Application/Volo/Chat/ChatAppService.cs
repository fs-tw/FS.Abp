using Volo.Chat.Localization;
using Volo.Abp.Application.Services;

namespace Volo.Chat
{
    public abstract class ChatAppService : ApplicationService
    {
        protected ChatAppService()
        {
            LocalizationResource = typeof(ChatResource);
            ObjectMapperContext = typeof(ChatApplicationModule);
        }
    }
}
