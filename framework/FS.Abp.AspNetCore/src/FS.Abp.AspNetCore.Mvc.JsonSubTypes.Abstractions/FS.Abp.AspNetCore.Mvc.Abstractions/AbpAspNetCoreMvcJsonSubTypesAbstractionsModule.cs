using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    [DependsOn(
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule)
        )]
    public class AbpAspNetCoreMvcJsonSubTypesAbstractionsModule : AbpModule
    {
    }
}
