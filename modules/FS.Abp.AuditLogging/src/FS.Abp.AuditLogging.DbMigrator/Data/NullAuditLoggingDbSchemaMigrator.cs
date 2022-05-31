using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.AuditLogging.Data
{
    /* This is used if database provider does't define
     * IAuditLoggingDbSchemaMigrator implementation.
     */
    public class NullAuditLoggingDbSchemaMigrator : IAuditLoggingDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}