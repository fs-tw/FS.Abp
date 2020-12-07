using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Account.ExternalProviders
{
    public interface IAccountExternalProviderAppService : IApplicationService
    {
        Task<ExternalProviderDto> GetAllAsync();

        Task<ExternalProviderItemWithSecretDto> GetByNameAsync(GetByNameInput input);
    }
}
