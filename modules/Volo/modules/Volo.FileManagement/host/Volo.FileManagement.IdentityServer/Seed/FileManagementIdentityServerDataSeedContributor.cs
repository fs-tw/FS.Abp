using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.FileManagement.IdentityServer.Seed
{
    public class FileManagementIdentityServerDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly FileManagementSampleIdentityDataSeeder _fileManagementSampleIdentityDataSeeder;
        private readonly FileManagementIdentityServerDataSeeder _fileManagementIdentityServerDataSeeder;

        public FileManagementIdentityServerDataSeedContributor(
            FileManagementIdentityServerDataSeeder fileManagementIdentityServerDataSeeder,
            FileManagementSampleIdentityDataSeeder fileManagementSampleIdentityDataSeeder)
        {
            _fileManagementIdentityServerDataSeeder = fileManagementIdentityServerDataSeeder;
            _fileManagementSampleIdentityDataSeeder = fileManagementSampleIdentityDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _fileManagementSampleIdentityDataSeeder.SeedAsync(context);
            await _fileManagementIdentityServerDataSeeder.SeedAsync(context);
        }
    }
}
