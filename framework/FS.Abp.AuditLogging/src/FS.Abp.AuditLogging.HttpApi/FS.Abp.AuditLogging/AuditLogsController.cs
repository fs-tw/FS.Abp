using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FS.Abp.AuditLogging.Filters;
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
    [Route("api/audit-logging")]
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
        [Route("filters")]
        public virtual async Task<Dictionary<string, List<AuditLogActionFilter>>> GetFiltersAsync()
        {
            return await AuditLoggingAppService.GetFiltersAsync();
        }

        [HttpPost]
        [Route("audit-log-actions")]
        public virtual async Task GetAuditLogActionSearchAsync(AuditLogsFilterInput input)
        {
            var array = new AuditLogsFilterInput()
            {
                AuditLogActionFilters = new List<AuditLogActionFilter>
                {
                    new AuditLogActionFilter()
                    {
                        ServiceName = "Volo.CmsKit.Admin.Pages.PageAdminAppService",
                        MethodName = "GetAsync"
                    },
                    new AuditLogActionFilter()
                    {
                        ServiceName = "Volo.CmsKit.Admin.Blogs.BlogAdminController",
                        MethodName = "UpdateAsync"
                    }
                },
                AuditLogFilter = new AuditLogFilter()
                {
                    ExecutionTime = new global::AutoFilterer.Types.Range<DateTime>(new DateTime(2021, 10, 21), new DateTime(2021, 10, 24))
                }
            };
            await AuditLoggingAppService.GetAuditLogActionSearchAsync(array);
        }
    }
}
