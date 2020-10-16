
using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.CodingManagement.CodingManagementDomainModule),
        typeof(FS.Theme.Core.ThemeCoreDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context) 
        {
           
        }
    }
}
