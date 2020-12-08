using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Features;
using Volo.Abp.SettingManagement;

namespace Volo.Chat.Settings
{
    [Authorize]
    [RequiresFeature(ChatFeatures.Enable)]
    public class SettingsAppService : ChatAppService, ISettingsAppService
    {
        protected ISettingManager SettingManager { get; }

        public SettingsAppService(ISettingManager settingManager)
        {
            SettingManager = settingManager;
        }

        public async Task SetSendOnEnterSettingAsync(SendOnEnterSettingDto input)
        {
            await SettingManager.SetForCurrentUserAsync(ChatSettingNames.Messaging.SendMessageOnEnter, input.SendOnEnter.ToString());
        }
    }
}
