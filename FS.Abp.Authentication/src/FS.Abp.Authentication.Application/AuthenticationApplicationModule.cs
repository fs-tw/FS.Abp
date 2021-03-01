using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationDomainModule),
        typeof(AuthenticationApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class AuthenticationApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AuthenticationApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<AuthenticationApplicationModule>(validate: true);
            });
        }
    }
}
