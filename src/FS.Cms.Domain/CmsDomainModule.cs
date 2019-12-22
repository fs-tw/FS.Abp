using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule)
        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
