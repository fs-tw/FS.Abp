using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using MediatR;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(CmsKitManagementApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitApplicationModule))]
    public class CmsKitManagementApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<CmsKitManagementApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CmsKitManagementApplicationModule>(validate: false);
            });

            context.Services.AddMediatR(
                typeof(FS.CmsKitManagement.CmsKitManagementApplicationContractsModule),
                typeof(FS.CmsKitManagement.CmsKitManagementApplicationModule)
                );
        }
    }
}
