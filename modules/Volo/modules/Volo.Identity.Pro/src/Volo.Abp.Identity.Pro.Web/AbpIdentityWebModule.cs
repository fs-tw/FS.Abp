using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.PageToolbars;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Identity.Web.Navigation;
using Volo.Abp.Identity.Web.Pages.Identity.Users;
using Volo.Abp.Identity.Web.Settings;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.PermissionManagement.Web;
using Volo.Abp.SettingManagement.Web;
using Volo.Abp.SettingManagement.Web.Pages.SettingManagement;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Threading;

namespace Volo.Abp.Identity.Web
{
    [DependsOn(
        typeof(AbpIdentityHttpApiModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpPermissionManagementWebModule),
        typeof(AbpSettingManagementWebModule),
        typeof(AbpVirtualFileSystemModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule)
        )]
    public class AbpIdentityWebModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(
                    typeof(IdentityResource),
                    typeof(AbpIdentityWebModule).Assembly,
                    typeof(AbpIdentityDomainSharedModule).Assembly,
                    typeof(AbpIdentityApplicationContractsModule).Assembly
                    );
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpIdentityWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpIdentityWebMainMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpIdentityWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<AbpIdentityWebModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpIdentityWebAutoMapperProfile>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/Identity/Users/Index", IdentityPermissions.Users.Default);
                options.Conventions.AuthorizePage("/Identity/Users/CreateModal", IdentityPermissions.Users.Create);
                options.Conventions.AuthorizePage("/Identity/Users/EditModal", IdentityPermissions.Users.Update);
                options.Conventions.AuthorizePage("/Identity/Roles/Index", IdentityPermissions.Roles.Default);
                options.Conventions.AuthorizePage("/Identity/Roles/CreateModal", IdentityPermissions.Roles.Create);
                options.Conventions.AuthorizePage("/Identity/Roles/EditModal", IdentityPermissions.Roles.Update);
                options.Conventions.AuthorizePage("/Identity/ClaimTypes/Index", IdentityPermissions.ClaimTypes.Default);
                options.Conventions.AuthorizePage("/Identity/ClaimTypes/CreateModal", IdentityPermissions.ClaimTypes.Create);
                options.Conventions.AuthorizePage("/Identity/ClaimTypes/EditModal", IdentityPermissions.ClaimTypes.Update);
                options.Conventions.AuthorizePage("/Identity/OrganizationUnits/Index", IdentityPermissions.OrganizationUnits.Default);
                options.Conventions.AuthorizePage("/Identity/OrganizationUnits/CreateModal", IdentityPermissions.OrganizationUnits.ManageOU);
                options.Conventions.AuthorizePage("/Identity/OrganizationUnits/EditModal", IdentityPermissions.OrganizationUnits.ManageOU);
            });

            Configure<SettingManagementPageOptions>(options =>
            {
                options.Contributors.Add(new IdentitySettingManagementPageContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options.ScriptBundles
                    .Configure(typeof(Volo.Abp.SettingManagement.Web.Pages.SettingManagement.IndexModel).FullName,
                        configuration =>
                        {
                            configuration.AddFiles("/Pages/Identity/Components/IdentitySettingGroup/Default.js");
                        });
            });

            Configure<AbpPageToolbarOptions>(options =>
            {
                options.Configure<Volo.Abp.Identity.Web.Pages.Identity.Users.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<IdentityResource>("NewUser"),
                            icon: "plus",
                            name: "CreateUser",
                            requiredPolicyName: IdentityPermissions.Users.Create
                        );
                    }
                );

                options.Configure<Volo.Abp.Identity.Web.Pages.Identity.Roles.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<IdentityResource>("NewRole"),
                            icon: "plus",
                            name: "CreateRole",
                            requiredPolicyName: IdentityPermissions.Roles.Create
                        );
                    }
                );

                options.Configure<Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<IdentityResource>("NewClaimType"),
                            icon: "plus",
                            name: "CreateClaimType",
                            requiredPolicyName: IdentityPermissions.ClaimTypes.Create
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
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.User,
                        createFormTypes: new[] { typeof(CreateModalModel.UserInfoViewModel) },
                        editFormTypes: new[] { typeof(EditModalModel.UserInfoViewModel) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.Role,
                        createFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.Roles.CreateModalModel.RoleInfoModel) },
                        editFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.Roles.EditModalModel.RoleInfoModel) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.ClaimType,
                        createFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes.CreateModalModel.ClaimTypeInfoModel) },
                        editFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes.EditModalModel.ClaimTypeInfoModel) }
                    );
                
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.OrganizationUnit,
                        createFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.OrganizationUnits.CreateModalModel.OrganizationUnitInfoModel) },
                        editFormTypes: new[] { typeof(Volo.Abp.Identity.Web.Pages.Identity.OrganizationUnits.EditModalModel.OrganizationUnitInfoModel) }
                    );
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpIdentityWebModule>(context);
        }
    }
}
