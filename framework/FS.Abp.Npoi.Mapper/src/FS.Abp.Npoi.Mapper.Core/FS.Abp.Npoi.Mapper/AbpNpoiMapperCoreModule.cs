using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace FS.Abp.Npoi.Mapper
{
    [DependsOn(
        typeof(Volo.Abp.VirtualFileSystem.AbpVirtualFileSystemModule)
        )]
    [DependsOn(typeof(FS.Abp.Data.AbpDataCoreModule))]
    public class AbpNpoiMapperCoreModule : AbpModule
    {
    }
}
