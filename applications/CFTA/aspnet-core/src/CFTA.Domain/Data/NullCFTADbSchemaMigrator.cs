using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CFTA.Data
{
    /* This is used if database provider does't define
     * ICFTADbSchemaMigrator implementation.
     */
    public class NullCFTADbSchemaMigrator : ICFTADbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}