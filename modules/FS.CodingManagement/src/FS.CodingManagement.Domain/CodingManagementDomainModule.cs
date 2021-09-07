using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CodingManagementDomainSharedModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
    public class CodingManagementDomainModule : AbpModule
    {

    }
}
