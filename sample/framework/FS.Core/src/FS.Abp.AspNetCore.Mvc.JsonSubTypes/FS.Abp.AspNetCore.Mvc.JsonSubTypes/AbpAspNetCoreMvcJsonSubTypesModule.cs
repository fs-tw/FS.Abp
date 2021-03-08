using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule),
        typeof(AbpAspNetCoreMvcJsonSubTypesContractsModule)
        )]
    public class AbpAspNetCoreMvcJsonSubTypesModule : AbpModule
    {
    }
}
