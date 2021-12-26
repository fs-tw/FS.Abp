using Volo.Abp.Modularity;
using Volo.Abp.Localization;

namespace FS.Abp.AuditLogging
{
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererCoreModule))]
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRCoreModule))]
    public class AbpAuditLoggingCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
