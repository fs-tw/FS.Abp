using System;
using Volo.Abp.Modularity;

namespace TM.MerchantApi
{
    [DependsOn(
        typeof(Volo.Abp.Json.AbpJsonModule)
        )]
    public class MerchantApiModule :AbpModule
    {
    }
}
