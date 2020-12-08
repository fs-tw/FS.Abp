using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.AuditLogging
{
    public class AuditLogActionDto : ExtensibleEntityDto<Guid>
    {
        public Guid? TenantId { get; set; }

        public Guid AuditLogId { get; set; }

        public string ServiceName { get; set; }

        public string MethodName { get; set; }

        public string Parameters { get; set; }

        public DateTime ExecutionTime { get; set; }

        public int ExecutionDuration { get; set; }
    }
}