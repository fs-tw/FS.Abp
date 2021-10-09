using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementDomainModule),
        typeof(CodingManagementApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationModule))]
    public class CodingManagementApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<CodingManagementApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CodingManagementApplicationModule>(validate: false);
            });
        }
    }
}
