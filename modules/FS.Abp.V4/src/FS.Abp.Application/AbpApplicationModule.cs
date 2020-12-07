using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Application;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Identity;
using Volo.Abp.AuditLogging;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Saas.Host;
using Volo.Saas.Tenant;
using Volo.Abp.TextTemplateManagement;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpDomainModule),
        typeof(AbpApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(AbpIdentityApplicationModule))]
    [DependsOn(typeof(AbpAuditLoggingApplicationModule))]
    [DependsOn(typeof(AbpIdentityServerApplicationModule))]
    [DependsOn(typeof(LanguageManagementApplicationModule))]
    [DependsOn(typeof(SaasHostApplicationModule))]
    [DependsOn(typeof(SaasTenantApplicationModule))]
    [DependsOn(typeof(TextTemplateManagementApplicationModule))]
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
