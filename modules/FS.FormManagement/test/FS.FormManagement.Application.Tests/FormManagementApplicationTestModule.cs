using Volo.Abp.Modularity;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(FormManagementApplicationModule),
        typeof(FormManagementDomainTestModule)
        )]
    public class FormManagementApplicationTestModule : AbpModule
    {

    }
}
