using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.File
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(Volo.FileManagement.FileManagementDomainModule),
        typeof(FileDomainSharedModule)
    )]
    public class FileDomainModule : AbpModule
    {

    }
}
