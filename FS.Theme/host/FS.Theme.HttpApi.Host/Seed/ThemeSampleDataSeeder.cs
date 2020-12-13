using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Theme.Seed
{
    /* You can use this file to seed some sample data
     * to test your module easier.
     *
     * This class is shared among these projects:
     * - FS.Theme.IdentityServer
     * - FS.Theme.Web.Unified (used as linked file)
     */
    public class ThemeSampleDataSeeder : ITransientDependency
    {
        public async Task SeedAsync(DataSeedContext context)
        {
            
        }
    }
}
