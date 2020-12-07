using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.Client.Dtos;

namespace Volo.Abp.IdentityServer.Client
{
    public interface IClientAppService : IApplicationService
    {
        Task<PagedResultDto<ClientWithDetailsDto>> GetListAsync(GetClientListInput input);

        Task<ClientWithDetailsDto> GetAsync(Guid id);

        Task<ClientWithDetailsDto> CreateAsync(CreateClientDto input);

        Task<ClientWithDetailsDto> UpdateAsync(Guid id, UpdateClientDto input);

        Task DeleteAsync(Guid id);
    }
}
