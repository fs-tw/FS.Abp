using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data
{
    public class CmsDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        //public BlogsSeeder cmsDefinitionSeeder { get; set; }
        //public PostsSeeder postSeeder { get; set; }
        //public TagsSeeder tagSeeder { get; set; }

        public async Task SeedAsync(DataSeedContext context)
        {
            //await this.cmsDefinitionSeeder.SeedAsync(context, "/Files/CMS範例格式.xlsx", "/Files/Content");
            //await this.postSeeder.SeedAsync(context, "/Files/CMS範例格式.xlsx", "/Files/Content");
            //await this.tagSeeder.SeedAsync(context);
        }
    }
}