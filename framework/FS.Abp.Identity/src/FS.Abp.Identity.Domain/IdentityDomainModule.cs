using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Identity;

[DependsOn(typeof(FS.Abp.Identity.IdentityDomainSharedModule))]
[DependsOn(
    typeof(Volo.Abp.Identity.AbpIdentityDomainModule)
)]
public class IdentityDomainModule : AbpModule
{

}
