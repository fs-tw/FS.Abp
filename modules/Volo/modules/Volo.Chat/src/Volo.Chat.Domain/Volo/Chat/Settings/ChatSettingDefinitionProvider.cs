using Volo.Abp.Localization;
using Volo.Abp.Settings;
using Volo.Chat.Localization;

namespace Volo.Chat.Settings
{
    public class ChatSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            context.Add(
                new SettingDefinition(
                    ChatSettingNames.Messaging.SendMessageOnEnter,
                    true.ToString(),
                    isVisibleToClients: true)
            );
        }
    }
}
