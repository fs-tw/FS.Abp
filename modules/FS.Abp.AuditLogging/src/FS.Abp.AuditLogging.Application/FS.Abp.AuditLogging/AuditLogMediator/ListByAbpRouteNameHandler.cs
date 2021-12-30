using MediatR;
using AutoFilterer.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.ObjectExtending;
using Volo.Abp.AuditLogging;
using System.Linq.Dynamic.Core;

namespace FS.Abp.AuditLogging.AuditLogMediator
{
    public class ListAuditLogByAbpRouteName : FS.Abp.MediatR.IQuery, IRequest<Volo.Abp.Application.Dtos.PagedResultDto<Dtos.AuditLogDto>>, Volo.Abp.Application.Dtos.IPagedAndSortedResultRequest
    {
        public string AbpRouteName { get; set; }

        public List<DateTime?> ExecutionTime { get; set; } = new List<DateTime?> { DateTime.Now.AddDays(-1), DateTime.Now };

        public int SkipCount { get; set; } = 0;

        public int MaxResultCount { get; set; } = 50;

        public string Sorting { get; set; } = $"{nameof(AuditLog.ExecutionTime)} Desc";
    }
    [Volo.Abp.Auditing.DisableAuditing]
    public class ListByAbpRouteNameHandler : Volo.Abp.Application.Services.ApplicationService, IRequestHandler<ListAuditLogByAbpRouteName, Volo.Abp.Application.Dtos.PagedResultDto<Dtos.AuditLogDto>>
    {
        public async Task<Volo.Abp.Application.Dtos.PagedResultDto<Dtos.AuditLogDto>> Handle(ListAuditLogByAbpRouteName request, CancellationToken cancellationToken)
        {
            var query = await this.LazyServiceProvider.LazyGetRequiredService<IAuditLogRepository>().GetQueryableAsync();

            query = new Filters.AuditLogAbpRouteNameFilter(request.AbpRouteName, new Range<DateTime>(request.ExecutionTime.FirstOrDefault(), request.ExecutionTime.LastOrDefault()))
                .ApplyFilterTo(query);

            var count = query.Count();

            query = query.OrderBy(request.Sorting).Skip(request.SkipCount).Take(request.MaxResultCount);

            var entities = await this.AsyncExecuter.ToListAsync(query);

            var result = new Volo.Abp.Application.Dtos.PagedResultDto<Dtos.AuditLogDto>(
                count,
                entities.Select(x =>
                {
                    var result = ObjectMapper.Map<AuditLog, Dtos.AuditLogDto>(x);
                    //x.MapExtraPropertiesTo(result, MappingPropertyDefinitionChecks.None);
                    return result;
                }).ToList());

            return result;

        }
    }
}
