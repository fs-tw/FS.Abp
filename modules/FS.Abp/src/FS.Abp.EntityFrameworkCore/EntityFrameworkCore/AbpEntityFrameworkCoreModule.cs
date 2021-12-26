using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityFrameworkCore
{
    [DependsOn(
        typeof(AbpDomainModule),
        typeof(Volo.Abp.EntityFrameworkCore.AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(
        typeof(EasyAbp.Abp.Trees.EntityFrameworkCore.AbpTreesEntityFrameworkCoreModule)
        )]
    [DependsOn(typeof(FS.Abp.AuditLogging.EntityFrameworkCore.AuditLoggingEntityFrameworkCoreModule))]
    public class AbpEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}