using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class GetOrganizationUnitInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }
    }
}
