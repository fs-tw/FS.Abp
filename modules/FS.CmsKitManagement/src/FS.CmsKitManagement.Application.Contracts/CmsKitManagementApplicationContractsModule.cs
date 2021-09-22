using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;
using Volo.Abp.MediatR;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationContractsModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitApplicationContractsModule))]
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRModule))]
    public class CmsKitManagementApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpMediatROptions>(o =>
            {
                o.AddModule<CmsKitManagementApplicationContractsModule>("cms-kit-management");
            });
        }
    }
}
