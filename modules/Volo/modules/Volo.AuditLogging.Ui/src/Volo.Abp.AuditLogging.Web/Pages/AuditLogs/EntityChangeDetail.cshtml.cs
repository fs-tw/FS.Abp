using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Volo.Abp.AuditLogging.Web.Pages.AuditLogs
{
    public class EntityChangeDetailModel : AuditLogsPageModel
    {
        public EntityChangeWithUsernameDto EntityChangeWithUsername { get; set; }

        [BindProperty(SupportsGet = true)]
        public Guid EntityChangeId { get; set; }

        protected IAuditLogsAppService AuditLogsAppService { get; }

        public EntityChangeDetailModel(IAuditLogsAppService auditLogsAppService)
        {
            AuditLogsAppService = auditLogsAppService;
        }

        public virtual async Task OnGetAsync()
        {
            EntityChangeWithUsername = await AuditLogsAppService.GetEntityChangeWithUsernameAsync(EntityChangeId);
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }
    }
}