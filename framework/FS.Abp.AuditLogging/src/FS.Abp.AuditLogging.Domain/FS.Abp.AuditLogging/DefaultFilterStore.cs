using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.AuditLogging.Domain
{

    public class DefaultFilterStore
        : Volo.Abp.Domain.Services.DomainService, IDefaultFilterStore
    {
        protected AuditLoggingFilterOptions Options { get; }
        public DefaultFilterStore(IOptions<AuditLoggingFilterOptions> options)
        {
            Options = options.Value;
        }

        public Dictionary<string, AuditLoggingFilter> GetList()
        {
            return Options.Filters;
        }

    }
}
