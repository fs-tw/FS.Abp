using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FS.Abp.AuditLogging.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public class EntityFrameworkCoreAuditLoggingDbSchemaMigrator
        : IAuditLoggingDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreAuditLoggingDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the AuditLoggingDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<AuditLoggingDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
