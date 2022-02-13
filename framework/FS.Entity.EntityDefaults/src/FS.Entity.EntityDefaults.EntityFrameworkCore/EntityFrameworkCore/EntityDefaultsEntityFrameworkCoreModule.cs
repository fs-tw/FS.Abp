using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults.EntityFrameworkCore
{
    [DependsOn(
     typeof(EntityDefaultsDomainModule),
     typeof(AbpEntityFrameworkCoreModule)
 )]
    public class EntityDefaultsEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}


