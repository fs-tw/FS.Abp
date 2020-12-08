using Volo.Abp.Application.Dtos;

namespace Volo.Abp.IdentityServer.ApiScope.Dtos
{
    public class GetApiScopeListInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
