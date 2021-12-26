using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Text;
using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRDomainModule))]
    public class AbpMediatRModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpMediatR<AbpMediatRModule>();
        }
    }
}
