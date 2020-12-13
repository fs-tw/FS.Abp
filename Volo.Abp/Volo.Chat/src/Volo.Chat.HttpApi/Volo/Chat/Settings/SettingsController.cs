using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;

namespace Volo.Chat.Settings
{
    [RemoteService(Name = "Chat")]
    [Area("chat")]
    [Route("api/chat/settings")]
    public class SettingsController : ChatController, ISettingsAppService
    {
        private readonly ISettingsAppService _settingAppService;

        public SettingsController(ISettingsAppService settingAppService)
        {
            _settingAppService = settingAppService;
        }

        [HttpPost]
        [Route("send-on-enter")]
        public Task SetSendOnEnterSettingAsync(SendOnEnterSettingDto input)
        {
            return _settingAppService.SetSendOnEnterSettingAsync(input);
        }
    }
}
