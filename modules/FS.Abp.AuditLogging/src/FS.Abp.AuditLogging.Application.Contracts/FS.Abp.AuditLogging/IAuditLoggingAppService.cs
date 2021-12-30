using AutoFilterer.Types;
using FS.Abp.AuditLogging.Filters;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.AuditLogging
{
    public interface IAuditLoggingAppService
    {
        Task<FS.Abp.AuditLogging.Dtos.AuditLogDto> GetAsync(Guid id);

        Task<Dictionary<string, List<AuditLogActionFilter>>> GetFiltersAsync();

        Task<PagedResultDto<Dtos.AuditLogActionDto>> GetAuditLogActionSearchAsync(
            string filterName,
            string search = null,
            Range<DateTime> executionTime = null,
            int skipCount = 0,
            int maxResultCount = 50,
            string sorting = "ExecutionTime");
    }
}