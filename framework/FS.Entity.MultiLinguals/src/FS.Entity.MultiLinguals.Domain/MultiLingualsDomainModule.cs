using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(MultiLingualsDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Abp.Data.AbpDataModule))]
    public class MultiLingualsDomainModule : AbpModule
    {

    }
}


