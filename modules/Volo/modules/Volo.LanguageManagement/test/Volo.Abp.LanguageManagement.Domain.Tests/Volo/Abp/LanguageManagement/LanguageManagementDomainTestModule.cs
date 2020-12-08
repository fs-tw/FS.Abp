using Volo.Abp.LanguageManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementEntityFrameworkCoreTestModule)
        )]
    public class LanguageManagementDomainTestModule : AbpModule
    {

    }
}
