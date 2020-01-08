using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace FS.Abp.Zero.Application
{
    [DependsOn(
        typeof(Volo.Abp.Application.AbpDddApplicationContractsModule)
        )]
    public class AbpZeroApplicationContractsModule : AbpModule
    {
    }
}
