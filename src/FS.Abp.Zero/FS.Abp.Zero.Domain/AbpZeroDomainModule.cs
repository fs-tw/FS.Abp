using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace FS.Abp.Zero.Domain
{
    [DependsOn(
        typeof(Volo.Abp.Data.AbpDataModule),
        typeof(Volo.Abp.Json.AbpJsonModule)
        )]
    public class AbpZeroDomainModule : AbpModule
    {
    }
}
