using Volo.Abp.Modularity;

namespace Volo.FileManagement
{
    [DependsOn(
        typeof(FileManagementApplicationModule),
        typeof(FileManagementDomainTestModule)
        )]
    public class FileManagementApplicationTestModule : AbpModule
    {

    }
}
