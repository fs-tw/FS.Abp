using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Json.SystemTextJson;
using System.Text;
using System;
using MediatR;

namespace FS.Abp.AspNetCore.Mvc
{
    [DependsOn(typeof(Volo.Abp.AspNetCore.Mvc.AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(FS.Abp.JsonSubTypes.NewtonsoftJson.AbpJsonSubTypesNewtonsoftJsonModule))]
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRHttpApiModule))]
    public class AbpAspNetCoreMvcModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMediatR(typeof(AbpAspNetCoreMvcModule));
            //Configure<AspNetCoreApiDescriptionModelProviderOptions>(o =>
            //{

            //    o.ActionNameGenerator = (method) =>
            //    {
            //        var methodNameBuilder = new StringBuilder(method.Name).Replace("Async", "");

            //        var parameters = method.GetParameters();
            //        if (parameters.Any())
            //        {
            //            methodNameBuilder.Append("By");

            //            for (var i = 0; i < parameters.Length; i++)
            //            {
            //                if (i > 0)
            //                {
            //                    methodNameBuilder.Append("And");
            //                }

            //                methodNameBuilder.Append(parameters[i].Name.ToPascalCase());
            //            }
            //        }

            //        return methodNameBuilder.ToString();
            //    };
            //});
        }
    }
}
