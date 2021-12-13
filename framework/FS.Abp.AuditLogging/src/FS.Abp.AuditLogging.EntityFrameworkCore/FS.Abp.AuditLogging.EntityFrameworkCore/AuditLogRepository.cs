using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public class EfCoreAuditLogActionRepository :
        EfCoreRepository<Volo.Abp.AuditLogging.EntityFrameworkCore.IAuditLoggingDbContext, Volo.Abp.AuditLogging.AuditLogAction, Guid>,
        IAuditLogActionRepository
    {
        public EfCoreAuditLogActionRepository(IDbContextProvider<Volo.Abp.AuditLogging.EntityFrameworkCore.IAuditLoggingDbContext> dbContextProvider)
            : base(dbContextProvider) { }
    }
}
