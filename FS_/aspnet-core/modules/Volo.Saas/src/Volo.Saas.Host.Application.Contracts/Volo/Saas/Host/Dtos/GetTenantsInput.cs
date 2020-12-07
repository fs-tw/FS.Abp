using Volo.Abp.Application.Dtos;

namespace Volo.Saas.Host.Dtos
{
    public class GetTenantsInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }

        public bool GetEditionNames { get; set; } = true;
    }
}
