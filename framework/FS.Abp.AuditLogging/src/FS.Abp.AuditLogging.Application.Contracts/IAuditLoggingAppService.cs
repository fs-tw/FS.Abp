using FS.Abp.AuditLogging.Filters;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.AuditLogging
{
    public interface IAuditLoggingAppService
    {
        Task<Dictionary<string, List<AuditLogActionFilter>>> GetFiltersAsync();
        //Task<PagedResultDto<AuditLogDto>> GetDetailsListAsync(GetAuditLogListInput input);

        Task<PagedResultDto<AuditLogActionDto>> GetAuditLogActionSearchAsync(AuditLogsFilterInput input);
    }
}