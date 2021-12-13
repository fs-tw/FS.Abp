using FS.Abp.AuditLogging.Filters;
using System.Collections.Generic;

namespace FS.Abp.AuditLogging
{
    public interface IDefaultFilterStore
    {
        Dictionary<string, List<AuditLogActionFilter>> GetFilters();
    }
}