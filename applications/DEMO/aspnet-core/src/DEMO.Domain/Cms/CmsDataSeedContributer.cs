using FS.Cms.Data.Seeder;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Data
{
    public class CmsDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public  BlogsSeeder cmsDefinitionSeeder { get; set; }
        public  PostsSeeder postSeeder { get; set; }
        public TagsSeeder tagSeeder { get; set; }

        public async Task SeedAsync(DataSeedContext context) 
        {          
            await this.cmsDefinitionSeeder.SeedAsync(context);
            await this.postSeeder.SeedAsync(context);
            await this.tagSeeder.SeedAsync(context);
        }


    }


}
