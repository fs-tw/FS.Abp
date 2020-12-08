using FS.Cms.DataSeed.Seeder;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Cms.DataSeed
{
    public class CmsDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        public  CmsDefinitionSeeder cmsDefinitionSeeder { get; set; }
        public  PostSeeder postSeeder { get; set; }
        public TagSeeder tagSeeder { get; set; }

        public async Task SeedAsync(DataSeedContext context) 
        {          
            await this.cmsDefinitionSeeder.SeedAsync(context);
            await this.postSeeder.SeedAsync(context);
            await this.tagSeeder.SeedAsync(context);
        }


    }


}
