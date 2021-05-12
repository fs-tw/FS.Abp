using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementApplicationModule),
        typeof(CmsKitManagementDomainTestModule)
        )]
    public class CmsKitManagementApplicationTestModule : AbpModule
    {

    }
}
