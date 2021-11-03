using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpDomainModule),
        typeof(AbpApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule))]
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererModule))]
    public class AbpApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<AbpApplicationModule>(validate: true);
            });
        }
    }
}
