using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainModule),
        typeof(CoreApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule),
        typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule)
        )]
    public class CoreApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<CoreApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CoreApplicationModule>(validate: true);
            });
        }
    }
}
