using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule))]
    public class PrinterManagementApplicationContractsModule : AbpModule
    {

    }
}
