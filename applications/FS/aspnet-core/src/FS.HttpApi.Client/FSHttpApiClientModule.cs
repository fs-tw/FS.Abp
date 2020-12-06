using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.AuditLogging;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TextTemplateManagement;
using Volo.Saas.Host;
using FS.Abp;
using FS.Cms;
using FS.Theme;

namespace FS
{
    [DependsOn(
        typeof(FSApplicationContractsModule),
        typeof(AbpIdentityHttpApiClientModule),
        typeof(AbpPermissionManagementHttpApiClientModule),
        typeof(AbpFeatureManagementHttpApiClientModule),
        typeof(SaasHostHttpApiClientModule),
        typeof(AbpAuditLoggingHttpApiClientModule),
        typeof(AbpIdentityServerHttpApiClientModule),
        typeof(AbpAccountAdminHttpApiClientModule),
        typeof(AbpAccountPublicHttpApiClientModule),
        typeof(LanguageManagementHttpApiClientModule),
        typeof(LeptonThemeManagementHttpApiClientModule),
        typeof(TextTemplateManagementHttpApiClientModule)
    )]
    [DependsOn(
        typeof(FS.Abp.AbpHttpApiClientModule),
        typeof(CmsHttpApiClientModule),
        typeof(ThemeHttpApiClientModule)
        )]
    public class FSHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Default";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(FSApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
