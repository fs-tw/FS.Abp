using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpDomainModule),
        typeof(FS.Abp.Npoi.Mapper.AbpNpoiMapperModule),
        typeof(Abp.File.FileDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}