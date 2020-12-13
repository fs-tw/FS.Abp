using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace FS.Theme.Seed
{
    public class ThemeIdentityServerDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly ThemeSampleIdentityDataSeeder _themeSampleIdentityDataSeeder;
        private readonly ThemeIdentityServerDataSeeder _themeIdentityServerDataSeeder;
        private readonly ICurrentTenant _currentTenant;

        public ThemeIdentityServerDataSeedContributor(
            ThemeIdentityServerDataSeeder themeIdentityServerDataSeeder,
            ThemeSampleIdentityDataSeeder themeSampleIdentityDataSeeder,
            ICurrentTenant currentTenant)
        {
            _themeIdentityServerDataSeeder = themeIdentityServerDataSeeder;
            _themeSampleIdentityDataSeeder = themeSampleIdentityDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {
                await _themeSampleIdentityDataSeeder.SeedAsync(context);
                await _themeIdentityServerDataSeeder.SeedAsync(context);
            }
        }
    }
}
