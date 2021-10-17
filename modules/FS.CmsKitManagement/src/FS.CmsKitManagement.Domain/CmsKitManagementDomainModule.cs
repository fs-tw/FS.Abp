using FS.Abp.EntityTypes;
using FS.CmsKitManagement.EntityTypes;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Domain;
using Volo.Abp.EventBus;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.EventBus.Local;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;
using Volo.CmsKit.Pages;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.Menus;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CmsKitManagementDomainSharedModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
    [DependsOn(typeof(FS.Abp.AbpDomainModule))]
    [DependsOn(typeof(FS.Abp.EntityTypes.EntityTypesDomainModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitDomainModule))]
    public class CmsKitManagementDomainModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<EntityTypeOptions>(options =>
            {
                options.GetOrAdd<MultiLinguals.MultiLingual>(a =>
                {
                    a.AddOrReplace<Page>(
                        MultiLingualsEntityTypeDefinition.Create<Page, PageTranslation>());

                    a.AddOrReplace<Blog>(
                        MultiLingualsEntityTypeDefinition.Create<Blog, BlogTranslation>());

                    a.AddOrReplace<BlogPost>(
                        MultiLingualsEntityTypeDefinition.Create<BlogPost, BlogPostTranslation>());

                    a.AddOrReplace<MenuItem>(
                        MultiLingualsEntityTypeDefinition.Create<MenuItem, MenuItemTranslation>());
                });
            });

        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<EntityTypeOptions>(options =>
            {
                context.Services.ExecutePreConfiguredActions(options);
            });
            AddEventHandlers(context.Services);
        }


        private static void AddEventHandlers(IServiceCollection services)
        {
            var localHandlers = new List<Type>();
            var distributedHandlers = new List<Type>();

            var options = services.ExecutePreConfiguredActions<EntityTypeOptions>();

            options.GetOrDefault<MultiLinguals.MultiLingual>()
                .ToList().ForEach(d =>
                {
                    var handlerType = typeof(MultiLinguals.EntityTypeCreatingOrDeletingHandler<>).MakeGenericType(d.Key);
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
