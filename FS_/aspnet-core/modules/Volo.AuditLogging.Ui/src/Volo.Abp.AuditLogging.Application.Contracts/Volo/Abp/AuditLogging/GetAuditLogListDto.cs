using System.ComponentModel.DataAnnotations;
using System.Net;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Validation;

namespace Volo.Abp.AuditLogging
{
    public class GetAuditLogListDto : PagedAndSortedResultRequestDto
    {
        [DynamicStringLength(typeof(AuditLogDtoCommonConsts), nameof(AuditLogDtoCommonConsts.UrlFilterMaxLength))] 
        public string Url { get; set; }

        [DynamicStringLength(typeof(AuditLogDtoCommonConsts), nameof(AuditLogDtoCommonConsts.UserNameFilterMaxLength))] 
        public string UserName { get; set; }

        public string ApplicationName { get; set; }

        public string CorrelationId { get; set; }

        [DynamicStringLength(typeof(AuditLogDtoCommonConsts), nameof(AuditLogDtoCommonConsts.HttpMethodFilterMaxLength))] 
        public string HttpMethod { get; set; }

        public HttpStatusCode? HttpStatusCode { get; set; }

        public int? MaxExecutionDuration { get; set; }

        public int? MinExecutionDuration { get; set; }

        public bool? HasException { get; set; }
    }
}