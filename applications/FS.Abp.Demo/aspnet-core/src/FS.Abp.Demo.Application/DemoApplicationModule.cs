using FS.Abp.EntityTypes;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using Volo.Abp.Account;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Reflection;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;

namespace FS.Abp.Demo
{
    [DependsOn(
        typeof(DemoDomainModule),
        typeof(AbpAccountApplicationModule),
        typeof(DemoApplicationContractsModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpTenantManagementApplicationModule),
        typeof(AbpFeatureManagementApplicationModule),
        typeof(AbpSettingManagementApplicationModule)
        )]
    [DependsOn(typeof(FS.Abp.EntityTypes.EntityTypesApplicationModule))]
    [DependsOn(
        typeof(FS.CmsKitManagement.CmsKitManagementApplicationModule),
        typeof(FS.CodingManagement.CodingManagementApplicationModule)
        )]
    public class DemoApplicationModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Volo.CmsKit.Admin.Blogs.BlogAdminAppService s;

            Volo.CmsKit.Admin.Blogs.BlogPostAdminAppService ss;

            //ss.GetListAsync(new Volo.CmsKit.Admin.Blogs.BlogPostGetListInput)

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<DemoApplicationModule>();
            });

            Volo.Abp.Collections.TypeList list = new Volo.Abp.Collections.TypeList();
            Volo.Abp.Collections.TypeList other = new Volo.Abp.Collections.TypeList();

            context.Services.OnRegistred(context =>
            {
                Type searchType = null;
                Type targetType = null;
                if (ReflectionHelper.IsAssignableToGenericType(
                    context.ImplementationType,
                    searchType = typeof(Volo.Abp.Application.Services.AbstractKeyCrudAppService<,,,,,,>)))
                {
                    targetType = ReflectionHelper.GetImplementedGenericTypes(context.ImplementationType, searchType).FirstOrDefault();
                }
                else if (ReflectionHelper.IsAssignableToGenericType(
                    context.ImplementationType,
                    searchType = typeof(Volo.Abp.Application.Services.CrudAppService<,,,,,,>)))
                {
                    targetType = ReflectionHelper.GetImplementedGenericTypes(context.ImplementationType, searchType).FirstOrDefault();
                }
                else if (ReflectionHelper.IsAssignableToGenericType(
                    context.ImplementationType,
                    searchType = typeof(Volo.Abp.Application.Services.ICrudAppService<,,,,,>)))
                {
                    if (!other.Contains(context.ImplementationType))
                        other.Add(context.ImplementationType);
                }


                if (targetType != null && !list.Contains(targetType))
                    list.Add(targetType);
            });

            Configure<EntityDefinitionOptions>(o =>
            {
                var options = list.Select(a =>
                 {
                     var entityDefinition = DefaultEntityDefinition.Create(a);
                     return (type: entityDefinition.Entity, value: entityDefinition);
                 }).ToArray();

                o.AddOrReplace(options);
                o.Other = other;
            });
        }
    }
}
