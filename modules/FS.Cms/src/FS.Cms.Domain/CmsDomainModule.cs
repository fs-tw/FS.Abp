
using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpDomainModule)//,
        //typeof(FS.Abp.CodingManagement.CodingManagementDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
