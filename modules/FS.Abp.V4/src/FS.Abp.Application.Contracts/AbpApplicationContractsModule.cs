using Volo.Abp.Application;
using Volo.Abp.Authorization;
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
        typeof(AbpDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(AbpIdentityApplicationContractsModule))]
    [DependsOn(typeof(AbpAuditLoggingApplicationContractsModule))]
    [DependsOn(typeof(AbpIdentityServerApplicationContractsModule))]
    [DependsOn(typeof(LanguageManagementApplicationContractsModule))]
    [DependsOn(typeof(SaasHostApplicationContractsModule))]
    [DependsOn(typeof(SaasTenantApplicationContractsModule))]
    [DependsOn(typeof(TextTemplateManagementApplicationContractsModule))]
    public class AbpApplicationContractsModule : AbpModule
    {

    }
}
