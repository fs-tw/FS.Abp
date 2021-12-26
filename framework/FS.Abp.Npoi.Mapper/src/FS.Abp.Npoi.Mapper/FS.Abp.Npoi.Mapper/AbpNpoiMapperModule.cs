using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace FS.Abp.Npoi.Mapper
{
    [DependsOn(
        typeof(FS.Abp.Npoi.Mapper.AbpNpoiMapperCoreModule)
        )]
    public class AbpNpoiMapperModule : AbpModule
    {
    }
}
