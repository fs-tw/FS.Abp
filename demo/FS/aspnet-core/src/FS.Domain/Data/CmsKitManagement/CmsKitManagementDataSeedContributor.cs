using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data.CmsKitManagement
{
    public class CmsKitManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public FS.CmsKitManagement.Data.BlogsSeeder blogPostSeeder { get; set; }
        public FS.CmsKitManagement.Data.Vocabularies.TwZipCodeSeeder TwZipCodeSeeder { get; set; }
        public CmsKitManagementDataSeedContributor()
        {

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await TwZipCodeSeeder.SeedAsync(context);
            await blogPostSeeder.SeedAsync(context);

        }
    }
}