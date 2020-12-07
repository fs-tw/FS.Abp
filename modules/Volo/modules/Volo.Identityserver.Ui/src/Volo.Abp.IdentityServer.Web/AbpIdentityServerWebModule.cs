using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Button;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.PageToolbars;
using Volo.Abp.AutoMapper;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.IdentityServer.Web.Navigation;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.PermissionManagement.Web;
using Volo.Abp.Threading;

namespace Volo.Abp.IdentityServer.Web
{
    [DependsOn(
        typeof(AbpIdentityServerHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule),
        typeof(AbpPermissionManagementWebModule),
        typeof(AbpAutoMapperModule))]
    public class AbpIdentityServerWebModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(AbpIdentityServerResource), typeof(AbpIdentityServerWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpIdentityServerWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpIdentityServerMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpIdentityServerWebModule>("Volo.Abp.IdentityServer.Web");
            });

            context.Services.AddAutoMapperObjectMapper<AbpIdentityServerWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpIdentityServerWebAutoMapperProfile>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/IdentityServer/Clients/Index", AbpIdentityServerPermissions.Client.Default);
                options.Conventions.AuthorizePage("/IdentityServer/ApiResources/Index", AbpIdentityServerPermissions.ApiResource.Default);
                options.Conventions.AuthorizePage("/IdentityServer/IdentityResources/Index", AbpIdentityServerPermissions.IdentityResource.Default);
                options.Conventions.AuthorizePage("/IdentityServer/ApiScopes/Index", AbpIdentityServerPermissions.ApiScope.Default);
            });

            Configure<AbpPageToolbarOptions>(options =>
            {
                options.Configure<Volo.Abp.IdentityServer.Web.Pages.IdentityServer.Clients.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<AbpIdentityServerResource>("CreateANewClient"),
                            icon: "plus",
                            id: "CreateNewButtonId",
                            requiredPolicyName: AbpIdentityServerPermissions.Client.Create
                        );
                    }
                );

                options.Configure<Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<AbpIdentityServerResource>("CreateANewResource"),
                            icon: "plus",
                            id: "CreateNewButtonId",
                            requiredPolicyName: AbpIdentityServerPermissions.ApiResource.Create
                        );
                    }
                );

                options.Configure<Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiScopes.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<AbpIdentityServerResource>("CreateANewScope"),
                            icon: "plus",
                            id: "CreateNewButtonId",
                            requiredPolicyName: AbpIdentityServerPermissions.ApiScope.Create
                        );
                    }
                );

                options.Configure<Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<AbpIdentityServerResource>("CreateStandardResources"),
                            icon: "gear",
                            id: "CreateStandardIdentityResourcesButton",
                            type: AbpButtonType.Secondary,
                            requiredPolicyName: AbpIdentityServerPermissions.IdentityResource.Create
                        );

                        toolbar.AddButton(
                            LocalizableString.Create<AbpIdentityServerResource>("CreateANewResource"),
                            icon: "plus",
                            id: "CreateNewIdentityResourceButton",
                            requiredPolicyName: AbpIdentityServerPermissions.IdentityResource.Create
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
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.Client,
                        createFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.Clients.ClientCreateModalView) },
                        editFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.Clients.ClientUpdateModalView) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.IdentityResource,
                        createFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources.IdentityResourceCreateModalView) },
                        editFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources.IdentityResourceUpdateModalView) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.ApiResource,
                        createFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources.ApiResourceCreateModalView) },
                        editFormTypes: new[] { typeof(Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources.ApiResourceUpdateModalView) }
                    );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<AbpIdentityServerWebModule>(context);
        }
    }
}
