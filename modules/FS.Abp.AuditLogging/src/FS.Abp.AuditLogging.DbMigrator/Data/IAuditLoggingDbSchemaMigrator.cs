using System.Threading.Tasks;

namespace FS.Abp.AuditLogging.Data
{
    public interface IAuditLoggingDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
