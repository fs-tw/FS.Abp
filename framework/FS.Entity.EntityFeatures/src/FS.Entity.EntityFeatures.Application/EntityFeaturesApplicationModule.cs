using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Entity.EntityFeatures;

[DependsOn(
    typeof(EntityFeaturesDomainModule),
    typeof(EntityFeaturesApplicationContractsModule),
    typeof(AbpDddApplicationModule),
    typeof(AbpAutoMapperModule)
    )]
public class EntityFeaturesApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<EntityFeaturesApplicationModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<EntityFeaturesApplicationModule>(validate: true);
        });
    }
}
