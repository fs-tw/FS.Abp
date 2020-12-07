using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.Data
{
    /* This is used if database provider does't define
     * IFSDbSchemaMigrator implementation.
     */
    public class NullFSDbSchemaMigrator : IFSDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}