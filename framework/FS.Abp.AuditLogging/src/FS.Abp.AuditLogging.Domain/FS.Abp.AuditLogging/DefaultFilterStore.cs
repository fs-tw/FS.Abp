using FS.Abp.AuditLogging.Filters;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.AuditLogging
{

    public class DefaultFilterStore
        : Volo.Abp.Domain.Services.DomainService, IDefaultFilterStore
    {
        protected AuditLoggingFilterOptions Options { get; }
        public DefaultFilterStore(IOptions<AuditLoggingFilterOptions> options)
        {
            Options = options.Value;
        }

        public Dictionary<string, List<AuditLogActionFilter>> GetFilters()
        {
            return Options.Filters;
        }

    }
}
