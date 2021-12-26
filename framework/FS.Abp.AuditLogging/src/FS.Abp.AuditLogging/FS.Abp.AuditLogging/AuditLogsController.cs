using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;

namespace FS.Abp.AuditLogging
{
    [RemoteService(Name = "AbpAuditLogging")]
    [Area("auditLogging")]
    [Controller]
    [ControllerName("AuditLogs")]
    [Route("api/audit-logging/audit-logs")]
    [DisableAuditing]
    public class AuditLogsController : AbpController
    {
        protected IAuditLoggingAppService AuditLoggingAppService { get; }
        public AuditLogsController(
            IAuditLoggingAppService auditLoggingAppService)
        {
            AuditLoggingAppService = auditLoggingAppService;
        }
        [HttpGet]
        [Route("details-list")]
        public virtual async Task<PagedResultDto<AuditLogDto>> GetDetailsListAsync(GetAuditLogListInput input)
        {
            return await AuditLoggingAppService.GetDetailsListAsync(input);
        }
        [HttpGet]
        [Route("filters")]
        public virtual async Task<Dictionary<string, AuditLoggingFilter>> GetFiltersAsync()
        {
            return await AuditLoggingAppService.GetFiltersAsync();
        }
    }
}
