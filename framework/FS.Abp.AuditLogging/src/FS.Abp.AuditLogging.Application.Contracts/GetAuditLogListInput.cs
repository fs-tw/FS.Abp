using AutoFilterer.Enums;
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Auditing;

namespace FS.Abp.AuditLogging
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
    public class AuditLogDto : ExtensibleEntityDto<Guid>
    {
        public Guid? UserId { get; set; }

        public string UserName { get; set; }

        public Guid? TenantId { get; set; }

        public Guid? ImpersonatorUserId { get; set; }

        public Guid? ImpersonatorTenantId { get; set; }

        public DateTime ExecutionTime { get; set; }

        public int ExecutionDuration { get; set; }

        public string ClientIpAddress { get; set; }

        public string ClientName { get; set; }

        public string BrowserInfo { get; set; }

        public string HttpMethod { get; set; }

        public string Url { get; set; }

        public string Exceptions { get; set; }

        public string Comments { get; set; }

        public int? HttpStatusCode { get; set; }

        public string ApplicationName { get; set; }

        public string CorrelationId { get; set; }

        public List<EntityChangeDto> EntityChanges { get; set; }

        public List<AuditLogActionDto> Actions { get; set; }
    }
    public class EntityChangeDto : ExtensibleEntityDto<Guid>
    {
        public Guid AuditLogId { get; set; }

        public Guid? TenantId { get; set; }

        public DateTime ChangeTime { get; set; }

        public EntityChangeType ChangeType { get; set; }

        public string EntityId { get; set; }

        public string EntityTypeFullName { get; set; }

        public List<EntityPropertyChangeDto> PropertyChanges { get; set; }
    }
    public class EntityPropertyChangeDto : EntityDto<Guid>
    {
        public Guid? TenantId { get; set; }

        public Guid EntityChangeId { get; set; }

        public string NewValue { get; set; }

        public string OriginalValue { get; set; }

        public string PropertyName { get; set; }

        public string PropertyTypeFullName { get; set; }
    }
    public class GetAuditLogListInput : FS.Abp.Application.Dtos.SearchResultRequestDto//PagedResultRequestDto
    {
        public string ApplicationName { get; set; }
        public string ClientName { get; set; }

    }
}
