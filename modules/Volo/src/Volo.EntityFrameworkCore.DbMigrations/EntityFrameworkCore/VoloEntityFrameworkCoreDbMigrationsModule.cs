using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Volo.EntityFrameworkCore
{
    [DependsOn(
        typeof(VoloEntityFrameworkCoreModule)
    )]
    public class VoloEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<VoloMigrationsDbContext>();
        }
    }
}