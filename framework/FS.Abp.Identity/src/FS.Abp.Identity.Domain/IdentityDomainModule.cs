using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Identity;

[DependsOn(
    typeof(Volo.Abp.Identity.AbpIdentityDomainModule)
)]

[DependsOn(
    typeof(IdentityDomainSharedModule)
)]
public class IdentityDomainModule : AbpModule
{

}
