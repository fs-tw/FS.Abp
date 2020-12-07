using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer.ClaimType.Dtos;

namespace Volo.Abp.IdentityServer.ClaimType
{
    public class IdentityServerClaimTypeAppService : IdentityServerAppServiceBase, IIdentityServerClaimTypeAppService
    {
        protected IIdentityClaimTypeRepository ClaimTypeRepository { get; }

        public IdentityServerClaimTypeAppService(IIdentityClaimTypeRepository claimTypeRepository)
        {
            ClaimTypeRepository = claimTypeRepository;
        }

        public virtual async Task<List<IdentityClaimTypeDto>> GetListAsync()
        {
            var claimTypes = await ClaimTypeRepository.GetListAsync();

            return ObjectMapper.Map<List<IdentityClaimType>, List<IdentityClaimTypeDto>>(claimTypes);
        }
    }
}
