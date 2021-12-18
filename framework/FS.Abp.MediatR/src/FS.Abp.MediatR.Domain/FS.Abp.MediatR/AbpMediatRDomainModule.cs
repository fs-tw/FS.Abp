using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    [DependsOn(typeof(Volo.Abp.Domain.AbpDddDomainModule))]
    public class AbpMediatRDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpMediatR<AbpMediatRDomainModule>();
        }
    }

}
