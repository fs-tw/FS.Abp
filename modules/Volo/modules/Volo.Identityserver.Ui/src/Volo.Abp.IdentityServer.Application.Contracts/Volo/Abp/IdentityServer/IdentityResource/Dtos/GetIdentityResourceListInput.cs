using Volo.Abp.Application.Dtos;

namespace Volo.Abp.IdentityServer.IdentityResource.Dtos
{
    public class GetIdentityResourceListInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
