using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(MetadataDomainSharedModule)
    )]
    public class MetadataDomainModule : AbpModule
    {

    }
}
