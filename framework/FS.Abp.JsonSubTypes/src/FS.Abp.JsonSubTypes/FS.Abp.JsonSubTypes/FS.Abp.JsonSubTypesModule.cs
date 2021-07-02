using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Modularity;

namespace FS.Abp.JsonSubTypes
{
    [DependsOn(
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule)
        )]
    public class JsonSubTypesModule : AbpModule
    {
    }
}
