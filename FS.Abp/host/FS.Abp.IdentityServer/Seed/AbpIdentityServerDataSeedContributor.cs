using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace FS.Abp.Seed
{
    public class AbpIdentityServerDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly AbpSampleIdentityDataSeeder _abpSampleIdentityDataSeeder;
        private readonly AbpIdentityServerDataSeeder _abpIdentityServerDataSeeder;
        private readonly ICurrentTenant _currentTenant;

        public AbpIdentityServerDataSeedContributor(
            AbpIdentityServerDataSeeder abpIdentityServerDataSeeder,
            AbpSampleIdentityDataSeeder abpSampleIdentityDataSeeder,
            ICurrentTenant currentTenant)
        {
            _abpIdentityServerDataSeeder = abpIdentityServerDataSeeder;
            _abpSampleIdentityDataSeeder = abpSampleIdentityDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {
                await _abpSampleIdentityDataSeeder.SeedAsync(context);
                await _abpIdentityServerDataSeeder.SeedAsync(context);
            }
        }
    }
}
