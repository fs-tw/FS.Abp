using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;
using Volo.FileManagement.HttpApi.Host.Seed;
using Volo.FileManagement.IdentityServer.Seed;

namespace Volo.FileManagement.Seed
{
    public class FileManagementUnifiedDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly FileManagementSampleIdentityDataSeeder _sampleIdentityDataSeeder;
        private readonly FileManagementSampleDataSeeder _fileManagementSampleDataSeeder;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public FileManagementUnifiedDataSeedContributor(
            FileManagementSampleIdentityDataSeeder sampleIdentityDataSeeder,
            IUnitOfWorkManager unitOfWorkManager, 
            FileManagementSampleDataSeeder fileManagementSampleDataSeeder)
        {
            _sampleIdentityDataSeeder = sampleIdentityDataSeeder;
            _unitOfWorkManager = unitOfWorkManager;
            _fileManagementSampleDataSeeder = fileManagementSampleDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _unitOfWorkManager.Current.SaveChangesAsync();
            await _sampleIdentityDataSeeder.SeedAsync(context);
            await _unitOfWorkManager.Current.SaveChangesAsync();
            await _fileManagementSampleDataSeeder.SeedAsync(context);
        }
    }
}