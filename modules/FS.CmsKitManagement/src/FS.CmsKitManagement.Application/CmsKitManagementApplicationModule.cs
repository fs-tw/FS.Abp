using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using MediatR;
using System.Collections.Generic;
using System;
using FS.Abp.EntityTypes;
using Volo.Abp.EventBus;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp.Reflection;
using Volo.Abp.EventBus.Local;
using Volo.Abp.EventBus.Distributed;
using System.Linq;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(CmsKitManagementApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitApplicationModule))]
    public class CmsKitManagementApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<CmsKitManagementApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<CmsKitManagementApplicationModule>(validate: false);
            });

            AddEventHandlers(context.Services);

            Configure<EntityDefinitionOptions>(o =>
            {
                o.GetOrAdd<Volo.CmsKit.Blogs.Blog>(
                    a => { },
                    (t) => DefaultEntityDefinition.Create<Volo.CmsKit.Admin.Blogs.BlogAdminAppService, Volo.CmsKit.Blogs.Blog, Volo.CmsKit.Admin.Blogs.CreateBlogDto>());

                o.GetOrAdd<Volo.CmsKit.Blogs.BlogPost>(
                    a => { },
                    (t) => DefaultEntityDefinition.Create<Volo.CmsKit.Admin.Blogs.BlogPostAdminAppService, Volo.CmsKit.Blogs.BlogPost, Volo.CmsKit.Admin.Blogs.CreateBlogPostDto>());

                o.GetOrAdd<Volo.CmsKit.Tags.Tag>(
                    a => { },
                    (t) => DefaultEntityDefinition.Create<Volo.CmsKit.Admin.Tags.TagAdminAppService, Volo.CmsKit.Tags.Tag, Volo.CmsKit.Admin.Tags.TagCreateDto>());

                o.GetOrAdd<Volo.CmsKit.Pages.Page>(
                    a => { },
                    (t) => DefaultEntityDefinition.Create<Volo.CmsKit.Admin.Pages.PageAdminAppService, Volo.CmsKit.Pages.Page, Volo.CmsKit.Admin.Pages.CreatePageInputDto>());
            });


            //context.Services.AddMediatR(
            //    typeof(FS.CmsKitManagement.CmsKitManagementApplicationContractsModule),
            //    typeof(FS.CmsKitManagement.CmsKitManagementApplicationModule)
            //    );
        }

        private static void AddEventHandlers(IServiceCollection services)
        {
            var localHandlers = new List<Type>();
            var distributedHandlers = new List<Type>();

            var options = services.ExecutePreConfiguredActions<EntityTypeOptions>();

            options.GetOrDefault<MultiLinguals.MultiLingual>()
                .ToList().ForEach(d =>
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
