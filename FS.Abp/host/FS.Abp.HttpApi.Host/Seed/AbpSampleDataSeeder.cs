using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Seed
{
    /* You can use this file to seed some sample data
     * to test your module easier.
     *
     * This class is shared among these projects:
     * - FS.Abp.IdentityServer
     * - FS.Abp.Web.Unified (used as linked file)
     */
    public class AbpSampleDataSeeder : ITransientDependency
    {
        public async Task SeedAsync(DataSeedContext context)
        {
            
        }
    }
}
