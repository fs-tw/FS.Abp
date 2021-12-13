using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.AuditLogging
{
    public interface IAuditLogActionRepository:
        Volo.Abp.Domain.Repositories.IRepository<Volo.Abp.AuditLogging.AuditLogAction, Guid>
    {
    }
}
