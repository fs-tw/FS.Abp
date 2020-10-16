
using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.CodingManagement.CodingManagementDomainModule),
        typeof(FS.Abp.Core.CoreDomainModule),
        typeof(FS.Theme.ThemeDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
