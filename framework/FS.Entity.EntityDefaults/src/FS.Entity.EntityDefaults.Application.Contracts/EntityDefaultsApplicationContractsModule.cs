using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Entity.EntityDefaults
{
    [DependsOn(
      typeof(EntityDefaultsDomainSharedModule),
      typeof(AbpDddApplicationContractsModule),
      typeof(AbpAuthorizationModule)
      )]
    public class EntityDefaultsApplicationContractsModule : AbpModule
    {

    }
}


