using System;
using System.Collections.Generic;
using JsonSubTypes;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace FS.Abp.Application
{
    [DependsOn(
        typeof(FS.Abp.Application.AbpDddApplicationContractsModule),
        typeof(Volo.Abp.Application.AbpDddApplicationModule)
        )]
    public class AbpDddApplicationModule : AbpModule
    {
    }
}
