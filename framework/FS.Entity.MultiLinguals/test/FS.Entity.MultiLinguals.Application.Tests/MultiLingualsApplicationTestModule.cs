using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals;

[DependsOn(
    typeof(MultiLingualsApplicationModule),
    typeof(MultiLingualsDomainTestModule)
    )]
public class MultiLingualsApplicationTestModule : AbpModule
{

}
