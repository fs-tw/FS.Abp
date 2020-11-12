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
        private readonly CmsDefinitionSeeder cmsDefinitionSeeder;
        private readonly PostSeeder postSeeder;

        public CmsDataSeedContributor(
            CmsDefinitionSeeder cmsDefinitionSeeder,
            PostSeeder postSeeder
            ) 
        {
            this.cmsDefinitionSeeder = cmsDefinitionSeeder;
            this.postSeeder = postSeeder;
        }

        public async Task SeedAsync(DataSeedContext context) 
        {          
            await this.cmsDefinitionSeeder.SeedAsync(context);
            await this.postSeeder.SeedAsync(context);
        }


    }


}
