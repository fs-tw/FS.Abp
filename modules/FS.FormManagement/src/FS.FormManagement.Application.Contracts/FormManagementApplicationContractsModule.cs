using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(FormManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationContractsModule))]
    [DependsOn(typeof(Volo.Forms.FormsApplicationContractsModule))]
    public class FormManagementApplicationContractsModule : AbpModule
    {

    }
}
