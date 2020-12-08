using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Chat.Settings
{
    public interface ISettingsAppService: IApplicationService
    {
        Task SetSendOnEnterSettingAsync(SendOnEnterSettingDto input);
    }
}
