using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class CodingManagementApplicationContractsModule : AbpModule
    {

    }
}
