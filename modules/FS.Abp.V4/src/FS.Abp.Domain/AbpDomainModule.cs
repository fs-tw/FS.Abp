using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.Abp.LanguageManagement;
using Volo.Saas;
using Volo.Abp.TextTemplateManagement;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(AbpDomainSharedModule)
    )]
    [DependsOn(typeof(LanguageManagementDomainModule))]
    [DependsOn(typeof(SaasDomainModule))]
    [DependsOn(typeof(TextTemplateManagementDomainModule))]
    public class AbpDomainModule : AbpModule
    {

    }
}
