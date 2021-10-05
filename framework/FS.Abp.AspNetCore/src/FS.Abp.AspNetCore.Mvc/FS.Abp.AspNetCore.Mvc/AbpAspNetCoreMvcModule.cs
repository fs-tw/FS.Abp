using MediatR;
using System;
using System.Linq;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

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
            Configure<AspNetCoreApiDescriptionModelProviderOptions>(o =>
            {
                
                o.ActionNameGenerator = (method) =>
                {
                    var methodNameBuilder = new StringBuilder(method.Name);

                    if (!method.Module.Name.StartsWith("Volo"))
                    {
                        methodNameBuilder = new StringBuilder(method.Name).Replace("Async", "");
                    }

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
