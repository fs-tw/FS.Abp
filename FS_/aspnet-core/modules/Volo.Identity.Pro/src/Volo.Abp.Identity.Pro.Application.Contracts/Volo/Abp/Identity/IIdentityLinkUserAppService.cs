using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Identity
{
    public interface IIdentityLinkUserAppService : IApplicationService
    {
        Task LinkAsync(LinkUserInput input);

        Task UnlinkAsync(UnLinkUserInput input);

        Task<bool> IsLinkedAsync(IsLinkedInput input);

        Task<string> GenerateLinkTokenAsync();

        Task<bool> VerifyLinkTokenAsync(VerifyLinkTokenInput token);

        Task<ListResultDto<LinkUserDto>> GetAllListAsync();
    }
}
