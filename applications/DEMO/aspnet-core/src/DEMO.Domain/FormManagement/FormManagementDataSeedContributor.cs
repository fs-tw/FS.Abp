using FS.FormManagement.Data;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data
{
    public class FormManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public FormSeeder formSeeder { get; set; }

        public async Task SeedAsync(DataSeedContext context)
        {
            await formSeeder.SeedAsync(context);
        }
    }
}