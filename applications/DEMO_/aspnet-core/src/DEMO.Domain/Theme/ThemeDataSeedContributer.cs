using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.Theme
{
    public class ThemeDataSeedContributer : IDataSeedContributor, ITransientDependency
    {
        
        public ThemeSeeder themeSeeder { get; set; }
        public async Task SeedAsync(DataSeedContext context)
        {
            await this.themeSeeder.SeedAsync(context);
        }
    }
}
