using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS.Abp.Demo.DbMigrator.Data
{
    class DataSeedContributor : Volo.Abp.Domain.Services.DomainService, IDataSeedContributor
    {
        public async Task SeedAsync(DataSeedContext context)
        {
            var contentsSeeder = this.LazyServiceProvider.LazyGetRequiredService<ContentsSeeder>();

            await contentsSeeder.SeedAsync(context, option =>
            {
                option.Ignore = false;
                option.FileName = "Files/Contents.xlsx";
            });
        }
    }
}
