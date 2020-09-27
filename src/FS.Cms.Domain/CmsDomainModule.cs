using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.CodingManagement.CodingManagementDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
