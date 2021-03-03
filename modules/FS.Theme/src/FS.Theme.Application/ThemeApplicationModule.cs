using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeDomainModule),
        typeof(ThemeApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpApplicationModule)
        )]
    public class ThemeApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<ThemeApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<ThemeApplicationModule>(validate: false);
            });
        }
    }
}
