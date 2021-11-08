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
using System.ComponentModel;

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

        }


        
    }
}
