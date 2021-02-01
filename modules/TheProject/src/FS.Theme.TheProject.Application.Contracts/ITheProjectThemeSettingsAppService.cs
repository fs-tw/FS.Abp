using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Theme.TheProject
{
    public interface ITheProjectThemeSettingsAppService : IApplicationService
    {
        Task<TheProjectThemeSettingsDto> GetAsync();

        Task UpdateAsync(UpdateTheProjectThemeSettingsDto input);
    }
}
