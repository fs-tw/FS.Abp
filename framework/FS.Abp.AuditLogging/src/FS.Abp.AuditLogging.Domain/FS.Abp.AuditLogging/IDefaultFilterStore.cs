using System.Collections.Generic;

namespace FS.Abp.AuditLogging.Domain
{
    public interface IDefaultFilterStore
    {
        Dictionary<string, AuditLoggingFilter> GetList();
    }
}