using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Coding;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(CodingDomainSharedModule)
)]
public class CodingDomainModule : AbpModule
{

}
