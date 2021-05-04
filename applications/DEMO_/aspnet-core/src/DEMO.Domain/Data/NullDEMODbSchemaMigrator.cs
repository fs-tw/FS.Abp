using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data
{
    /* This is used if database provider does't define
     * IDEMODbSchemaMigrator implementation.
     */
    public class NullDEMODbSchemaMigrator : IDEMODbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}