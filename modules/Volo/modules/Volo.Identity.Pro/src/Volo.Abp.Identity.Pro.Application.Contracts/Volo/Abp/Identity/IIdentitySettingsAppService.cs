using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Identity
{
    public interface IIdentitySettingsAppService : IApplicationService
    {
        Task<IdentitySettingsDto> GetAsync();

        Task UpdateAsync(IdentitySettingsDto input);
    }
}
