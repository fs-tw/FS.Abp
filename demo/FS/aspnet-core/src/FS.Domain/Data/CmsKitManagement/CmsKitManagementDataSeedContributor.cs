using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data.CmsKitManagement
{
    public class CmsKitManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public FS.CmsKitManagement.Data.BlogsSeeder blogPostSeeder { get; set; }

        public CmsKitManagementDataSeedContributor()
        {

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await blogPostSeeder.SeedAsync(context);
        }
    }
}