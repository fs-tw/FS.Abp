using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(MetadataDomainModule),
        typeof(MetadataApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class MetadataApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<MetadataApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<MetadataApplicationModule>(validate: true);
            });
        }
    }
}
