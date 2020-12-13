using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.ClaimType.Dtos;

namespace Volo.Abp.IdentityServer.ClaimType
{
    public interface IIdentityServerClaimTypeAppService : IApplicationService
    {
        Task<List<IdentityClaimTypeDto>> GetListAsync();
    }
}
