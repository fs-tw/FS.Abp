using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;

namespace FS.Abp.Seed
{
    public class AbpHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly AbpSampleDataSeeder _abpSampleDataSeeder;
        private readonly ICurrentTenant _currentTenant;

        public AbpHttpApiHostDataSeedContributor(
            AbpSampleDataSeeder abpSampleDataSeeder,
            ICurrentTenant currentTenant)
        {
            _abpSampleDataSeeder = abpSampleDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {
                await _abpSampleDataSeeder.SeedAsync(context);
            }
        }
    }
}
