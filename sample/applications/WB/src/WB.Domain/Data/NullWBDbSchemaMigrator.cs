using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace WB.Data
{
    /* This is used if database provider does't define
     * IWBDbSchemaMigrator implementation.
     */
    public class NullWBDbSchemaMigrator : IWBDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}