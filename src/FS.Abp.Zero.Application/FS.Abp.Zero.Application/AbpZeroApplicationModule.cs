using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace FS.Abp.Zero.Application
{
    [DependsOn(
        typeof(FS.Abp.Zero.Application.AbpZeroApplicationContractsModule),
        typeof(Volo.Abp.Application.AbpDddApplicationModule)
        )]
    public class AbpZeroApplicationModule : AbpModule
    {
    }
}
