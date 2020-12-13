using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace FS.Theme.Seed
{
    public class ThemeUnifiedDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly ThemeSampleIdentityDataSeeder _sampleIdentityDataSeeder;
        private readonly ThemeSampleDataSeeder _themeSampleDataSeeder;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly ICurrentTenant _currentTenant;

        public ThemeUnifiedDataSeedContributor(
            ThemeSampleIdentityDataSeeder sampleIdentityDataSeeder,
            IUnitOfWorkManager unitOfWorkManager,
            ThemeSampleDataSeeder themeSampleDataSeeder,
            ICurrentTenant currentTenant)
        {
            _sampleIdentityDataSeeder = sampleIdentityDataSeeder;
            _unitOfWorkManager = unitOfWorkManager;
            _themeSampleDataSeeder = themeSampleDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _unitOfWorkManager.Current.SaveChangesAsync();

            using (_currentTenant.Change(context?.TenantId))
            {
                await _sampleIdentityDataSeeder.SeedAsync(context);
                await _unitOfWorkManager.Current.SaveChangesAsync();
                await _themeSampleDataSeeder.SeedAsync(context);
            }
        }
    }
}
