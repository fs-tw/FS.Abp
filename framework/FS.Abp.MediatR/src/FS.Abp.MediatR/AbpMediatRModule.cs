using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Text;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Conventions;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRCoreModule))]
    [DependsOn(typeof(Volo.Abp.Swashbuckle.AbpSwashbuckleModule))]
    public class AbpMediatRModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddTransient<IConfigureOptions<AbpAspNetCoreMvcOptions>, AbpAspNetCoreMvcConfigureOptions>();

            ConfigureMediatR(context);

            Configure<AspNetCoreApiDescriptionModelProviderOptions>(o =>
            {
                var original = new AspNetCoreApiDescriptionModelProviderOptions();
                o.ActionNameGenerator = (method) =>
                {
                    if (method.Module.Name.StartsWith("Volo"))
                        return original.ActionNameGenerator.Invoke(method);

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

        private void ConfigureMediatR(ServiceConfigurationContext context)
        {
            var application = context.Services.GetSingletonInstance<IAbpApplication>();

            application.Modules.Select(x => x.Assembly).Where(a =>
              {
                  return a.GetTypes().Any(y =>
                  {
                      return AbpAspNetCoreMvcConfigureOptions.IsIRequestHandler(y);// || AbpAspNetCoreMvcConfigureOptions.IsIRequest(y);
                  });
              }).ToList().ForEach(a =>
              {
                  context.Services.AddMediatR(a);
              });

            context.Services.AddMediatR(typeof(AbpMediatRModule).Assembly);
        }
    }

    public class AbpAspNetCoreMvcConfigureOptions : IConfigureOptions<AbpAspNetCoreMvcOptions>
    {
        private readonly AbpMediatROptions _abpMediatROptions;
        public AbpAspNetCoreMvcConfigureOptions(
            IOptions<AbpMediatROptions> abpMediatROptions)
        {
            _abpMediatROptions = abpMediatROptions.Value;
        }
        public void Configure(AbpAspNetCoreMvcOptions options)
        {
            options.ConventionalControllers.Create(_abpMediatROptions);
        }
        public static bool IsIRequestHandler(Type type)
        {
            if (!type.IsPublic || type.IsAbstract || type.IsGenericType)
            {
                return false;
            }

            return
                ReflectionHelper.IsAssignableToGenericType(type, typeof(global::MediatR.IRequestHandler<,>));

        }

    }
}
