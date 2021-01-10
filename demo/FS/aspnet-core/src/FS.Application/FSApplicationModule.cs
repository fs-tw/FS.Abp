using FS.Abp.AspNetCore.Mvc.JsonSubTypes;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.TenantManagement;

namespace FS
{
    [DependsOn(
        typeof(FSDomainModule),
        typeof(AbpAccountApplicationModule),
        typeof(FSApplicationContractsModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpTenantManagementApplicationModule),
        typeof(AbpFeatureManagementApplicationModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpApplicationModule)
        )]
    [DependsOn(typeof(FS.Abp.AspNetCore.Mvc.JsonSubTypes.AbpAspNetCoreMvcJsonSubTypesContractsModule))]
    public class FSApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<FSApplicationModule>();
            });

            Configure<JsonSubtypesOptions>(options =>
            {
                options.AddProfiles<FSApplicationModule>();
            });
        }
    }
}
