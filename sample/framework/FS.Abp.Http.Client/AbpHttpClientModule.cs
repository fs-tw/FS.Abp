using System;
using Volo.Abp.Modularity;

namespace FS.Abp.Http.Client
{
    [DependsOn(
        typeof(Volo.Abp.Http.Client.AbpHttpClientModule)
        )]
    public class AbpHttpClientModule:AbpModule
    {
    }
}
