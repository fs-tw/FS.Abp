using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.File
{
    [DependsOn(
        typeof(FileDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(Volo.FileManagement.FileManagementApplicationContractsModule))]
    public class FileApplicationContractsModule : AbpModule
    {

    }
}
