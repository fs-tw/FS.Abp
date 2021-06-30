using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using System.Linq;
using System;
using MediatR;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRHttpApiModule))]
    public class AbpHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpHttpApiModule).Assembly);
            });
        }
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

            context.Services.AddMediatR(typeof(FS.Abp.AbpHttpApiModule));
    }
    }
}
