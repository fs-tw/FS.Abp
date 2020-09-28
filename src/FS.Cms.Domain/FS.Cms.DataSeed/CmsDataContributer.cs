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
        private readonly ICmsDefinitionSeeder cmsDefinitionSeeder;

        public CmsDataSeedContributor(
            ICmsDefinitionSeeder cmsDefinitionSeeder
            ) 
        {
            this.cmsDefinitionSeeder = cmsDefinitionSeeder;
        }

        public async Task SeedAsync(DataSeedContext context) 
        {
            await this.cmsDefinitionSeeder.SeedAsync(context);
        }


    }


}
