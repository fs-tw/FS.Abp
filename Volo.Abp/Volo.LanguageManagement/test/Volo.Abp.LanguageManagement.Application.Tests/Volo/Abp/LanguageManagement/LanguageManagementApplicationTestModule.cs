using Volo.Abp.Modularity;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementApplicationModule),
        typeof(LanguageManagementDomainTestModule)
        )]
    public class LanguageManagementApplicationTestModule : AbpModule
    {
        
    }
}
