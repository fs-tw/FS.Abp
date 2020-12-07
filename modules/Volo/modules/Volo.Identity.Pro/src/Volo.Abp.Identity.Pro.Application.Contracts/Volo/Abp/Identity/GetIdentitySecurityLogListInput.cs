using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class GetIdentitySecurityLogListInput : PagedAndSortedResultRequestDto
    {
        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public string ApplicationName { get; set; }

        public string Identity { get; set; }

        public string Action { get; set; }

        public string UserName { get; set; }

        public string ClientId { get; set; }

        public string CorrelationId { get; set; }
    }

}
