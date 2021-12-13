using FS.Abp.Swashbuckle;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;
using System;
using System.Linq;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererModule))]
    [DependsOn(typeof(FS.Abp.JsonSubTypes.AbpJsonSubTypesModule))]
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRModule))]
    [DependsOn(typeof(FS.Abp.Metadata.MetadataModule))]
    [DependsOn(typeof(Volo.Abp.Swashbuckle.AbpSwashbuckleModule))]
    public class AbpModule : Volo.Abp.Modularity.AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            

            context.Services.AddTransient<IConfigureOptions<SwaggerGenOptions>, SwaggerDocConfigureOptions>();

            context.Services.AddTransient<IConfigureOptions<SwaggerUIOptions>, SwaggerEndpointConfigureOptions>();
        }
    }
}
