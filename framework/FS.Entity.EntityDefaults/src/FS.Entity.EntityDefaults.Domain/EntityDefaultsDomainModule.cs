using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults
{
    [DependsOn(
      typeof(AbpDddDomainModule),
      typeof(EntityDefaultsDomainSharedModule)
  )]
    public class EntityDefaultsDomainModule : AbpModule
    {

    }
}


