using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace FS.Abp.Domain
{
    [DependsOn(
        typeof(Volo.Abp.Domain.AbpDddDomainModule),
        typeof(Volo.Abp.Json.AbpJsonModule)
        )]
    public class AbpDddDomainModule : AbpModule
    {
    }
}
