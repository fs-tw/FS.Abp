using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesApplicationModule),
        typeof(EntityTypesDomainTestModule)
        )]
    public class EntityTypesApplicationTestModule : AbpModule
    {

    }
}
