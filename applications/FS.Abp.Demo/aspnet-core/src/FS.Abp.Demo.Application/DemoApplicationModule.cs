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
    [DependsOn(typeof(FS.Abp.AuditLogging.AuditLoggingApplicationModule))]
    public class DemoApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<DemoApplicationModule>();
            });


        }
    }
}
