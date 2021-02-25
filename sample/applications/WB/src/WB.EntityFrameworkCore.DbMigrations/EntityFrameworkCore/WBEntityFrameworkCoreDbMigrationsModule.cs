using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace WB.EntityFrameworkCore
{
    [DependsOn(
        typeof(WBEntityFrameworkCoreModule)
        )]
    public class WBEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<WBMigrationsDbContext>();
        }
    }
}
