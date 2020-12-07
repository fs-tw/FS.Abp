using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;

namespace Volo.Abp.AuditLogging
{
    [RemoteService(Name = AuditLoggingRemoteServiceConsts.RemoteServiceName)]
    [Area("auditLogging")]
    [Controller]
    [ControllerName("AuditLogs")]
    [Route("api/audit-logging/audit-logs")]
    [DisableAuditing]
    public class AuditLogsController : AbpController, IAuditLogsAppService
    {
        protected IAuditLogsAppService AuditLogsAppService { get; }

        public AuditLogsController(IAuditLogsAppService auditLogsAppService)
        {
            AuditLogsAppService = auditLogsAppService;
        }

        [HttpGet]
        [Route("")]
        public virtual async Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListDto input)
        {
            return await AuditLogsAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual async Task<AuditLogDto> GetAsync(Guid id)
        {
            return await AuditLogsAppService.GetAsync(id);
        }

        [HttpGet]
        [Route("statistics/error-rate")]
        public virtual async Task<GetErrorRateOutput> GetErrorRateAsync(GetErrorRateFilter filter)
        {
            return await AuditLogsAppService.GetErrorRateAsync(filter);
        }

        [HttpGet]
        [Route("statistics/average-execution-duration-per-day")]
        public virtual async Task<GetAverageExecutionDurationPerDayOutput> GetAverageExecutionDurationPerDayAsync(GetAverageExecutionDurationPerDayInput filter)
        {
            return await AuditLogsAppService.GetAverageExecutionDurationPerDayAsync(filter);
        }

        [HttpGet]
        [Route("entity-changes/")]
        public virtual async Task<PagedResultDto<EntityChangeDto>> GetEntityChangesAsync(GetEntityChangesDto input)
        {
            return await AuditLogsAppService.GetEntityChangesAsync(input);
        }

        [HttpGet]
        [Route("entity-changes-with-username/")]
        public virtual async Task<List<EntityChangeWithUsernameDto>> GetEntityChangesWithUsernameAsync(EntityChangeFilter input)
        {
            return await AuditLogsAppService.GetEntityChangesWithUsernameAsync(input);
        }

        [HttpGet]
        [Route("entity-change-with-username/{entityChangeId}")]
        public virtual async Task<EntityChangeWithUsernameDto> GetEntityChangeWithUsernameAsync(Guid entityChangeId)
        {
            return await AuditLogsAppService.GetEntityChangeWithUsernameAsync(entityChangeId);
        }

        [HttpGet]
        [Route("entity-changes/{entityChangeId}")]
        public virtual async Task<EntityChangeDto> GetEntityChangeAsync(Guid entityChangeId)
        {
            return await AuditLogsAppService.GetEntityChangeAsync(entityChangeId);
        }
    }
}
