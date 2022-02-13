using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults;

[DependsOn(
    typeof(EntityDefaultsApplicationModule),
    typeof(EntityDefaultsDomainTestModule)
    )]
public class EntityDefaultsApplicationTestModule : AbpModule
{

}
