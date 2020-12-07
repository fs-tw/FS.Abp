using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Saas.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.PageToolbars;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.Host.Navigation;
using Volo.Abp.Threading;

namespace Volo.Saas.Host
{
    [DependsOn(
        typeof(SaasHostHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule),
        typeof(AbpFeatureManagementWebModule),
        typeof(AbpAutoMapperModule)
        )]
    public class SaasHostWebModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(SaasResource), typeof(SaasHostWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(SaasHostWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new SaasHostMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasHostWebModule>("Volo.Saas.Host");
            });

            context.Services.AddAutoMapperObjectMapper<SaasHostWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<SaasHostWebAutoMapperProfile>(validate: true);
            });


            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/Saas/Host/Tenants/Index", SaasHostPermissions.Tenants.Default);
                options.Conventions.AuthorizePage("/Saas/Host/Tenants/CreateModal", SaasHostPermissions.Tenants.Create);
                options.Conventions.AuthorizePage("/Saas/Host/Tenants/EditModal", SaasHostPermissions.Tenants.Update);
                options.Conventions.AuthorizePage("/Saas/Host/Tenants/ConnectionStrings", SaasHostPermissions.Tenants.ManageConnectionStrings);
                options.Conventions.AuthorizePage("/Saas/Host/Editions/Index", SaasHostPermissions.Editions.Default);
                options.Conventions.AuthorizePage("/Saas/Host/Editions/CreateModal", SaasHostPermissions.Editions.Create);
                options.Conventions.AuthorizePage("/Saas/Host/Editions/EditModal", SaasHostPermissions.Editions.Update);
            });

            Configure<AbpPageToolbarOptions>(options =>
            {
                options.Configure<Volo.Saas.Host.Pages.Saas.Host.Editions.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<SaasResource>("NewEdition"),
                            icon: "plus",
                            name: "CreateEdition",
                            requiredPolicyName: SaasHostPermissions.Editions.Create
                        );
                    }
                );

                options.Configure<Volo.Saas.Host.Pages.Saas.Host.Tenants.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<SaasResource>("ManageHostFeatures"),
                            icon: "cog",
                            name: "ManageHostFeatures",
                            requiredPolicyName: FeatureManagementPermissions.ManageHostFeatures
                        );

                        toolbar.AddButton(
                            LocalizableString.Create<SaasResource>("NewTenant"),
                            icon: "plus",
                            name: "CreateTenant",
                            requiredPolicyName: SaasHostPermissions.Tenants.Create
                        );
                    }
                );
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        SaasModuleExtensionConsts.ModuleName,
                        SaasModuleExtensionConsts.EntityNames.Tenant,
                        createFormTypes: new[] { typeof(Volo.Saas.Host.Pages.Saas.Host.Tenants.CreateModalModel.TenantInfoModel) },
                        editFormTypes: new[] { typeof(Volo.Saas.Host.Pages.Saas.Host.Tenants.EditModalModel.TenantInfoModel) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        SaasModuleExtensionConsts.ModuleName,
                        SaasModuleExtensionConsts.EntityNames.Edition,
                        createFormTypes: new[] { typeof(Volo.Saas.Host.Pages.Saas.Host.Editions.CreateModalModel.EditionInfoModel) },
                        editFormTypes: new[] { typeof(Volo.Saas.Host.Pages.Saas.Host.Editions.EditModalModel.EditionInfoModel) }
                    );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<SaasHostWebModule>(context);
        }
    }
}
