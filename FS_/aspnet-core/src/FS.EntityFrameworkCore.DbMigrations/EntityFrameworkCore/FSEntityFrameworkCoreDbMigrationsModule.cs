using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace FS.EntityFrameworkCore
{
    [DependsOn(
        typeof(FSEntityFrameworkCoreModule)
    )]
    public class FSEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<FSMigrationsDbContext>();
        }
    }
}