using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using System.Collections.Generic;
using System;
using FS.Entity.EntityFeatures;
using System.Linq;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp.Reflection;
using Volo.Abp.EventBus;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.EventBus.Local;

namespace FS.Entity.MultiLinguals
{
    [DependsOn(
        typeof(MultiLingualsDomainModule),
        typeof(MultiLingualsApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class MultiLingualsApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<MultiLingualsApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<MultiLingualsApplicationModule>(validate: false);
            });

            addEventHandlers(context.Services);
        }

        private static void addEventHandlers(IServiceCollection services)
        {
            var localHandlers = new List<Type>();
            var distributedHandlers = new List<Type>();

            var options = services.ExecutePreConfiguredActions<EntityFeaturesOptions>();

            options.GetOrDefault<MultiLingual>()
                ?.ToList().ForEach(d =>
                {
                    var handlerType = typeof(MultiLinguals.EntityTypeCreatedOrDeletedHandler<>).MakeGenericType(d.Key);
                    registerType(handlerType);
                });

            void registerType(Type handlerType)
            {
                services.TryAddTransient(handlerType);

                if (ReflectionHelper.IsAssignableToGenericType(handlerType, typeof(ILocalEventHandler<>)))
                {
                    localHandlers.Add(handlerType);
                }
                else if (ReflectionHelper.IsAssignableToGenericType(handlerType, typeof(IDistributedEventHandler<>)))
                {
                    distributedHandlers.Add(handlerType);
                }

                services.Configure<AbpLocalEventBusOptions>(options =>
                {
                    options.Handlers.AddIfNotContains(localHandlers);
                });

                services.Configure<AbpDistributedEventBusOptions>(options =>
                {
                    options.Handlers.AddIfNotContains(distributedHandlers);
                });
            }
        }

    }
}


