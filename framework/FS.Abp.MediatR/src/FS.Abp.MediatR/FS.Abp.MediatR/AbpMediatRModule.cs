using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.Modularity;
using System.Text;
using System;

namespace FS.Abp.MediatR
{
    [DependsOn(typeof(FS.Abp.JsonSubTypes.JsonSubTypesModule))]
    public class AbpMediatRModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }

    }

}
