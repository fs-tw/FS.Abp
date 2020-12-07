using Volo.Abp.Application.Dtos;

namespace Volo.Saas.Host.Dtos
{
    public class GetEditionsInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
