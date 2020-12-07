using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class GetAvailableRolesInput : PagedAndSortedResultRequestDto
    {
        public string Filter { get; set; }

        public Guid Id { get; set; }
    }
}
