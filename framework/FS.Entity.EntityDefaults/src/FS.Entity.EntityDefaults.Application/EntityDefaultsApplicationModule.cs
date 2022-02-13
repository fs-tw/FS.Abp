using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Entity.EntityDefaults
{
    [DependsOn(
        typeof(EntityDefaultsDomainModule),
        typeof(EntityDefaultsApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule))]
    public class EntityDefaultsApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<EntityDefaultsApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<EntityDefaultsApplicationModule>(validate: false);
            });
        }
    }
}


