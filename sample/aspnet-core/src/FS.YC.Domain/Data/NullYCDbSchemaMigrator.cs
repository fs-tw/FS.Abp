using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.YC.Data
{
    /* This is used if database provider does't define
     * IYCDbSchemaMigrator implementation.
     */
    public class NullYCDbSchemaMigrator : IYCDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}