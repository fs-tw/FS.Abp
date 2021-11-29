using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.AuditLogging
{
    public interface IAuditLoggingAppService
    {
        Task<Dictionary<string, AuditLoggingFilter>> GetFiltersAsync();
        Task<PagedResultDto<AuditLogDto>> GetDetailsListAsync(GetAuditLogListInput input);
    }
}