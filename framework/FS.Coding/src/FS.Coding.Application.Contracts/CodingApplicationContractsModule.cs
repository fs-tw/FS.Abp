using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Coding;

[DependsOn(
    typeof(CodingDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
    )]
[DependsOn(typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule))]
public class CodingApplicationContractsModule : AbpModule
{

}
