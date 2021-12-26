using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;
using Microsoft.Extensions.DependencyInjection;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    //[DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererApplicationContractsModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitApplicationContractsModule))]
    public class CmsKitManagementApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
