using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Identity
{
    public interface IIdentitySecurityLogAppService : IApplicationService
    {
        Task<PagedResultDto<IdentitySecurityLogDto>> GetListAsync(GetIdentitySecurityLogListInput input);

        Task<IdentitySecurityLogDto> GetAsync(Guid id);

        Task<PagedResultDto<IdentitySecurityLogDto>> GetMyListAsync(GetIdentitySecurityLogListInput input);

        Task<IdentitySecurityLogDto> GetMyAsync(Guid id);
    }
}
