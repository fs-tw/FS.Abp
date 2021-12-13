using FS.Abp.AuditLogging.Filters;
using FS.Abp.AuditLogging.Localization;
using FS.Abp.AutoFilterer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.AuditLogging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.ObjectExtending;
using System.Linq.Dynamic.Core;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingAppService : AuditLoggingAppServiceBase, IAuditLoggingAppService, ITransientDependency
    {
        protected IAuditLogRepository AuditLogRepository { get; }
        protected IAuditLogActionRepository AuditLogActionRepository { get; }
        protected IDefaultFilterStore DefaultFilterStore { get; }
        public AuditLoggingAppService(
            IAuditLogRepository auditLogRepository,
            IAuditLogActionRepository auditLogActionRepository,
            IDefaultFilterStore defaultFilterStore)
        {
            AuditLogRepository = auditLogRepository;
            AuditLogActionRepository = auditLogActionRepository;
            DefaultFilterStore = defaultFilterStore;
        }

        public Task<Dictionary<string, List<AuditLogActionFilter>>> GetFiltersAsync()
        {
            return Task.FromResult(DefaultFilterStore.GetFilters());
        }
        //public async Task<PagedResultDto<AuditLogDto>> GetDetailsListAsync(GetAuditLogListInput input)
        //{
        //    var query = await this.AuditLogRepository.WithDetailsAsync();
        //    query = input.ApplyFilterTo(query);
        //    query = query.OrderByDescending(x => x.ExecutionTime);

        //    var count = await this.AsyncExecuter.CountAsync(query);
        //    var auditLogs = await this.AsyncExecuter.ToListAsync(query
        //        .Skip(input.SkipCount)
        //        .Take(input.MaxResultCount));

        //    return new PagedResultDto<AuditLogDto>()
        //    {
        //        Items = auditLogs.Select(x => ObjectMapper.Map<AuditLog, AuditLogDto>(x)).ToList(),
        //        TotalCount = count
        //    };
        //}


        public async Task<PagedResultDto<AuditLogActionDto>> GetAuditLogActionSearchAsync(AuditLogsFilterInput input)
        {

            var logQuery = await this.AuditLogRepository.GetQueryableAsync();
            var actionQuery = await this.AuditLogActionRepository.GetQueryableAsync();

            if (input.AuditLogFilter != null)
                logQuery = input.AuditLogFilter.ApplyFilterTo(logQuery);

            if (input.AuditLogActionFilters != null)
                actionQuery = input.AuditLogActionFilters.ApplyFiltersTo(actionQuery);

            actionQuery = actionQuery
                .Where(x => logQuery.Select(x => x.Id).Contains(x.AuditLogId));

            var count = await this.AsyncExecuter.CountAsync(actionQuery);

            var auditLogs = await this.AsyncExecuter.ToListAsync(actionQuery
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount)
                .OrderBy(input.Sorting));

            var datas = actionQuery.ToList();

            return new PagedResultDto<AuditLogActionDto>()
            {
                Items = datas.Select(x => ObjectMapper.Map<AuditLogAction, AuditLogActionDto>(x)).ToList(),
                TotalCount = count
            };


        }
    }
}
