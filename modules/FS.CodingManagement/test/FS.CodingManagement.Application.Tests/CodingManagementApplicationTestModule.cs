using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementApplicationModule),
        typeof(CodingManagementDomainTestModule)
        )]
    public class CodingManagementApplicationTestModule : AbpModule
    {

    }
}
