using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.AuditLogging
{
    public interface IAuditLogsAppService : IApplicationService
    {
        Task<PagedResultDto<AuditLogDto>> GetListAsync(GetAuditLogListDto input);

        Task<AuditLogDto> GetAsync(Guid id);

        Task<GetErrorRateOutput> GetErrorRateAsync(GetErrorRateFilter filter);

        Task<GetAverageExecutionDurationPerDayOutput> GetAverageExecutionDurationPerDayAsync(GetAverageExecutionDurationPerDayInput filter);

        Task<PagedResultDto<EntityChangeDto>> GetEntityChangesAsync(GetEntityChangesDto input);

        Task<List<EntityChangeWithUsernameDto>> GetEntityChangesWithUsernameAsync(EntityChangeFilter input);

        Task<EntityChangeWithUsernameDto> GetEntityChangeWithUsernameAsync(Guid entityChangeId);

        Task<EntityChangeDto> GetEntityChangeAsync(Guid entityChangeId);
    }
}
