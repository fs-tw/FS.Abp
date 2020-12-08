using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Volo.Chat
{
    [Dependency(ReplaceServices = true)]
    public class ChatBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Chat";
    }
}
