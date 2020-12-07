using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Saas.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.Tenant.Navigation;

namespace Volo.Saas.Tenant
{
    [DependsOn(
        typeof(SaasTenantHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule),
        typeof(AbpFeatureManagementWebModule),
        typeof(AbpAutoMapperModule)
        )]
    public class SaasTenantWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(SaasResource), typeof(SaasTenantWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(SaasTenantWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new SaasTenantMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasTenantWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<SaasTenantWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<SaasTenantWebAutoMapperProfile>(validate: true);
            });


            Configure<RazorPagesOptions>(options =>
            {

            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<SaasTenantWebModule>(context);
        }
    }
}
