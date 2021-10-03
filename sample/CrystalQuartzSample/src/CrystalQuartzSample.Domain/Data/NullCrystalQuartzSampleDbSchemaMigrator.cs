using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CrystalQuartzSample.Data
{
    /* This is used if database provider does't define
     * ICrystalQuartzSampleDbSchemaMigrator implementation.
     */
    public class NullCrystalQuartzSampleDbSchemaMigrator : ICrystalQuartzSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}