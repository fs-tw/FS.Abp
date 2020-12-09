
using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule)
        )]
    [DependsOn(
        typeof(FS.Abp.Core.CoreDomainModule)//,
        //typeof(FS.Abp.CodingManagement.CodingManagementDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
