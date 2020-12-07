using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.LeptonTheme.Management
{
    public interface ILeptonThemeSettingsAppService : IApplicationService
    {
        Task<LeptonThemeSettingsDto> GetAsync();

        Task UpdateAsync(UpdateLeptonThemeSettingsDto input);
    }
}
