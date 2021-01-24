using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectDomainModule),
        typeof(TheProjectApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpSettingManagementDomainModule)
        )]
    [DependsOn(
        typeof(FS.Theme.ThemeApplicationModule)
        )]
    public class TheProjectApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<TheProjectApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<TheProjectApplicationModule>(validate: false);
            });
        }
    }
}
