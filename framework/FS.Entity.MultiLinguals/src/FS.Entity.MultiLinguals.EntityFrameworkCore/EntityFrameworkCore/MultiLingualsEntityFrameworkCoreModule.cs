using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals.EntityFrameworkCore
{
    [DependsOn(
        typeof(MultiLingualsDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class MultiLingualsEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}


