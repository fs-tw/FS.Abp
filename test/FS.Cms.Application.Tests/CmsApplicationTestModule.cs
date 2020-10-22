using Volo.Abp.Modularity;
namespace FS.Cms
{
    [DependsOn(
        typeof(CmsApplicationModule),
        typeof(CmsDomainTestModule)
        )]
    public class CmsApplicationTestModule : AbpModule
    {

    }
}
