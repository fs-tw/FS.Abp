using Volo.Abp.Modularity;

namespace FS.Abp.File
{
    [DependsOn(
        typeof(FileApplicationModule),
        typeof(FileDomainTestModule)
        )]
    public class FileApplicationTestModule : AbpModule
    {

    }
}
