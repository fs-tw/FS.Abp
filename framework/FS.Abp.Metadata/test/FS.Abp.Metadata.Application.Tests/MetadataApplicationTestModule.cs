using Volo.Abp.Modularity;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(MetadataApplicationModule),
        typeof(MetadataDomainTestModule)
        )]
    public class MetadataApplicationTestModule : AbpModule
    {

    }
}
