using FS.FormManagement.Data;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data.FormManagement
{
    public class FormManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public FormDataSeeder formDataSeeder { get; set; }

        public async Task SeedAsync(DataSeedContext context)
        {
            await formDataSeeder.SeedAsync(context);
        }
    }
}