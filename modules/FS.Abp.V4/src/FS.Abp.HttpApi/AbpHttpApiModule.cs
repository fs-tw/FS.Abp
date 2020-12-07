using Localization.Resources.AbpUi;
using FS.Abp.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
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
        typeof(AbpApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(AbpIdentityHttpApiModule))]
    [DependsOn(typeof(AbpAuditLoggingHttpApiModule))]
    [DependsOn(typeof(AbpIdentityServerHttpApiModule))]
    [DependsOn(typeof(LanguageManagementHttpApiModule))]
    [DependsOn(typeof(SaasHostHttpApiModule))]
    [DependsOn(typeof(SaasTenantHttpApiModule))]
    [DependsOn(typeof(TextTemplateManagementHttpApiModule))]
    public class AbpHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AbpResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
