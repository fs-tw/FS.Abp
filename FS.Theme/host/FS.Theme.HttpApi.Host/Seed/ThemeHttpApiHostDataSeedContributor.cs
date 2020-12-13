using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace FS.Theme.Seed
{
    public class ThemeHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly ThemeSampleDataSeeder _themeSampleDataSeeder;
        private readonly ICurrentTenant _currentTenant;

        public ThemeHttpApiHostDataSeedContributor(
            ThemeSampleDataSeeder themeSampleDataSeeder,
            ICurrentTenant currentTenant)
        {
            _themeSampleDataSeeder = themeSampleDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {
                await _themeSampleDataSeeder.SeedAsync(context);
            }
        }
    }
}
