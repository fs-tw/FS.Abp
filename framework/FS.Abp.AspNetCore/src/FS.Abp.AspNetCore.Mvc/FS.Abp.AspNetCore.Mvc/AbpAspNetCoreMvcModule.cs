using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using FS.Abp.AspNetCore.Mvc.JsonSubTypes;
using JsonSubTypes;
using Volo.Abp.Json.SystemTextJson;
using System.Text;
using System;

namespace FS.Abp.AspNetCore.Mvc
{
    [DependsOn(typeof(Volo.Abp.AspNetCore.AbpAspNetCoreModule))]
    [DependsOn(typeof(FS.Abp.AspNetCore.Mvc.NewtonsoftJson.AbpAspNetCoreMvcNewtonsoftJsonModule))]
    public class AbpAspNetCoreMvcModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AspNetCoreApiDescriptionModelProviderOptions>(o =>
            {
                o.ActionNameGenerator = (method) =>
                {
                    var methodNameBuilder = new StringBuilder(method.Name).Replace("Async", "");

                    var parameters = method.GetParameters();
                    if (parameters.Any())
                    {
                        methodNameBuilder.Append("By");

                        for (var i = 0; i < parameters.Length; i++)
                        {
                            if (i > 0)
                            {
                                methodNameBuilder.Append("And");
                            }

                            methodNameBuilder.Append(parameters[i].Name.ToPascalCase());
                        }
                    }

                    return methodNameBuilder.ToString();
                };
            });
        }
    }
}
