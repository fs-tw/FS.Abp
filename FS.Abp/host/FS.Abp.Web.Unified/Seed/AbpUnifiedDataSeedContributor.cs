using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace FS.Abp.Seed
{
    public class AbpUnifiedDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly AbpSampleIdentityDataSeeder _sampleIdentityDataSeeder;
        private readonly AbpSampleDataSeeder _abpSampleDataSeeder;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly ICurrentTenant _currentTenant;

        public AbpUnifiedDataSeedContributor(
            AbpSampleIdentityDataSeeder sampleIdentityDataSeeder,
            IUnitOfWorkManager unitOfWorkManager,
            AbpSampleDataSeeder abpSampleDataSeeder,
            ICurrentTenant currentTenant)
        {
            _sampleIdentityDataSeeder = sampleIdentityDataSeeder;
            _unitOfWorkManager = unitOfWorkManager;
            _abpSampleDataSeeder = abpSampleDataSeeder;
            _currentTenant = currentTenant;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _unitOfWorkManager.Current.SaveChangesAsync();

            using (_currentTenant.Change(context?.TenantId))
            {
                await _sampleIdentityDataSeeder.SeedAsync(context);
                await _unitOfWorkManager.Current.SaveChangesAsync();
                await _abpSampleDataSeeder.SeedAsync(context);
            }
        }
    }
}
