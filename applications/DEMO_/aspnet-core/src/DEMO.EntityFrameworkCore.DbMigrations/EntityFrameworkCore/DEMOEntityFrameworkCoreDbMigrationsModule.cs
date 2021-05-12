using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DEMO.EntityFrameworkCore
{
    [DependsOn(
        typeof(DEMOEntityFrameworkCoreModule)
    )]
    public class DEMOEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DEMOMigrationsDbContext>();
        }
    }
}