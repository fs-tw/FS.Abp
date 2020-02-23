using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainModule),
        typeof(CmsApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(FS.Abp.Application.AbpDddApplicationModule),
        typeof(FS.Abp.Trees.TreesApplicationModule)
        )]
    public class CmsApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CmsApplicationModule>(false);
            });
        }
    }
}
