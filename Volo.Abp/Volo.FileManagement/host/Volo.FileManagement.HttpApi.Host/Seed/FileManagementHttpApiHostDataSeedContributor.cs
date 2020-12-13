using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.FileManagement.HttpApi.Host.Seed
{
    public class FileManagementHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly FileManagementSampleDataSeeder _fileManagementSampleDataSeeder;

        public FileManagementHttpApiHostDataSeedContributor(
            FileManagementSampleDataSeeder fileManagementSampleDataSeeder)
        {
            _fileManagementSampleDataSeeder = fileManagementSampleDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _fileManagementSampleDataSeeder.SeedAsync(context);
        }
    }
}
