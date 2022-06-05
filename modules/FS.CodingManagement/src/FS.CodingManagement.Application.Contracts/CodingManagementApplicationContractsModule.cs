using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementDomainSharedModule)
        )]
    [DependsOn(typeof(FS.Coding.Codes.CodesApplicationContractsModule))]
    public class CodingManagementApplicationContractsModule : AbpModule
    {

    }
}
