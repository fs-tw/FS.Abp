using System;
using System.Linq;
using System.Reflection;
using FS.Abp.MediatR;
using MediatR;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp.DependencyInjection;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AbpMediatRServiceCollectionExtensions
    {
        public static IServiceCollection AddAbpMediatR<TModule>(
            this IServiceCollection services, bool withConventionalController = false, Action<ConventionalControllerSetting> settingsBuilder = null)
        {
            services.AddMediatR(typeof(TModule).Assembly);

            if (withConventionalController)
            {
                var settings = new ConventionalControllerSetting(AbpMediatRConsts.DefaultRootPath, AbpMediatRConsts.DefaultRemoteServiceName, typeof(TModule).Assembly);

                settingsBuilder?.Invoke(settings);

                services.Configure<FS.Abp.MediatR.AbpMediatROptions>(options =>
                {
                    options.AddOrReplaceSetting(settings.RootPath, settings.RemoteServiceName, settings.Assembly);
                });

                services.AddMediatR(settings.Assembly);
            }

            return services;
        }

        public static IServiceCollection AddAbpMediatRWithConventionalController<TModule>(
            this IServiceCollection services,
            Action<ConventionalControllerSetting> settingsBuilder = null)
        {


            //new IPipelineBehaviorRegistrar(services,settings.Assembly).Register();

            return services;
        }
    }
}
