using Volo.Abp.Modularity;

namespace Volo.Abp.TextTemplateManagement
{
    [DependsOn(
        typeof(TextTemplateManagementApplicationModule),
        typeof(TextTemplateManagementDomainTestModule)
        )]
    public class TextTemplateManagementApplicationTestModule : AbpModule
    {

    }
}
