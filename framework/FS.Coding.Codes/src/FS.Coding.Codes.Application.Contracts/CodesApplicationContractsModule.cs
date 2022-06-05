using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
    )]
[DependsOn(typeof(FS.Coding.CodingApplicationContractsModule))]
public class CodesApplicationContractsModule : AbpModule
{

}
