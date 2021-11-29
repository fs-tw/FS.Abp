using FS.Abp.AuditLogging.Domain;
using FS.Abp.AuditLogging.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.AuditLogging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.ObjectExtending;

namespace FS.Abp.AuditLogging
{

    public class AuditLoggingAppService : AuditLoggingAppServiceBase, IAuditLoggingAppService, ITransientDependency
    {
        protected IAuditLogRepository AuditLogRepository { get; }
        protected IDefaultFilterStore DefaultFilterStore { get; }
        public AuditLoggingAppService(
            IAuditLogRepository auditLogRepository,
            IDefaultFilterStore defaultFilterStore)
        {
            AuditLogRepository = auditLogRepository;
            DefaultFilterStore = defaultFilterStore;
        }

        public Task<Dictionary<string, AuditLoggingFilter>> GetFiltersAsync()
        {
            return Task.FromResult(DefaultFilterStore.GetList());
        }
        public async Task<PagedResultDto<AuditLogDto>> GetDetailsListAsync(GetAuditLogListInput input)
        {
            var query = await this.AuditLogRepository.WithDetailsAsync();
            query = input.ApplyFilterTo(query);
            query= query.OrderByDescending(x => x.ExecutionTime);

            var count = await this.AsyncExecuter.CountAsync(query);
            var auditLogs = await this.AsyncExecuter.ToListAsync(query
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount));

            return new PagedResultDto<AuditLogDto>()
            {
                Items = auditLogs.Select(x=>ObjectMapper.Map<AuditLog, AuditLogDto>(x)).ToList(),
                TotalCount = count
            };
        }
    }
}
