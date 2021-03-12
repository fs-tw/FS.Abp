using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(FormManagementDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Abp.AbpDomainModule))]
    public class FormManagementDomainModule : AbpModule
    {

    }
}
