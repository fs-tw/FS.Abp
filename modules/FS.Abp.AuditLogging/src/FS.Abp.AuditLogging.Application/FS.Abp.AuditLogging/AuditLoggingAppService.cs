﻿using AutoFilterer.Types;
using FS.Abp.AuditLogging.Filters;
using FS.Abp.AutoFilterer;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AuditLogging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.AuditLogging
{
    public class AuditLoggingAppService : Volo.Abp.Application.Services.ApplicationService, IAuditLoggingAppService, ITransientDependency
    {
        protected IAuditLogRepository AuditLogRepository { get; }
        protected IRepository<AuditLogAction> AuditLogActionRepository { get; }
        protected AuditLoggingFilterOptions FilterOptions { get; set; }


        public AuditLoggingAppService(
            IAuditLogRepository auditLogRepository,
            IRepository<AuditLogAction> auditLogActionRepository,
            IOptions<AuditLoggingFilterOptions> options)
        {
            AuditLogRepository = auditLogRepository;
            AuditLogActionRepository = auditLogActionRepository;
            FilterOptions = options.Value;
        }

        public async Task<FS.Abp.AuditLogging.Dtos.AuditLogDto> GetAsync(Guid id)
        {
            var query = await this.AuditLogRepository.WithDetailsAsync();

            var entity=await this.AsyncExecuter.SingleOrDefaultAsync(query.Where(x => x.Id.Equals(id)));

            return ObjectMapper.Map<Volo.Abp.AuditLogging.AuditLog, FS.Abp.AuditLogging.Dtos.AuditLogDto>(entity);

        }

        public Task<Dictionary<string, List<AuditLogActionFilter>>> GetFiltersAsync()
        {
            return Task.FromResult(FilterOptions.Filters);
        }

        public async Task<PagedResultDto<Dtos.AuditLogActionDto>> GetAuditLogActionSearchAsync(
            string filterName,
            string search = null,
            Range<DateTime> executionTime = null,
            int skipCount = 0,
            int maxResultCount = 50,
            string sorting = nameof(AuditLog.ExecutionTime))
        {
            if (!FilterOptions.Filters.ContainsKey(filterName))
                throw new Exception("can't find filter name,pls check GetFiltersAsync");

            var actionfilterParams = FilterOptions.Filters[filterName];

            var auditLogFilter = new AuditLogFilter()
            {
                CombineWith = global::AutoFilterer.Enums.CombineType.And,
                ExecutionTime = executionTime,
                Search = search
            };
            var auditLogActionFilters = actionfilterParams.Select(x => new AuditLogActionFilter()
            {
                CombineWith = global::AutoFilterer.Enums.CombineType.And,
                MethodName = x.MethodName,
                ServiceName = x.ServiceName
            }).ToList();


            var logQuery = await this.AuditLogRepository.GetQueryableAsync();
            var actionQuery = await this.AuditLogActionRepository.GetQueryableAsync();

            if (auditLogFilter != null)
                logQuery = auditLogFilter.ApplyFilterTo(logQuery);

            if (auditLogActionFilters != null)
                actionQuery = auditLogActionFilters.ApplyFiltersTo(actionQuery);

            actionQuery = actionQuery
                .Where(x => logQuery.Select(x => x.Id).Contains(x.AuditLogId));

            var count = await this.AsyncExecuter.CountAsync(actionQuery);

            var auditLogs = await this.AsyncExecuter.ToListAsync(actionQuery
                .Skip(skipCount)
                .Take(maxResultCount)
                .OrderBy(sorting));

            var datas = actionQuery.ToList();

            return new PagedResultDto<Dtos.AuditLogActionDto>()
            {
                Items = datas.Select(x => ObjectMapper.Map<AuditLogAction, Dtos.AuditLogActionDto>(x)).ToList(),
                TotalCount = count
            };


        }
    }
}
