using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.PageToolbars;
using Volo.Abp.AutoMapper;
using Volo.Abp.LanguageManagement.Navigation;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Threading;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(typeof(LanguageManagementHttpApiModule))]
    [DependsOn(typeof(AbpAspNetCoreMvcUiThemeCommercialModule))]
    [DependsOn(typeof(AbpAutoMapperModule))]
    public class LanguageManagementWebModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToUi(
                        LanguageManagementModuleExtensionConsts.ModuleName,
                        LanguageManagementModuleExtensionConsts.EntityNames.Language,
                        createFormTypes: new[] { typeof(Volo.Abp.LanguageManagement.Pages.LanguageManagement.CreateModel.LanguageCreateModalView) },
                        editFormTypes: new[] { typeof(Volo.Abp.LanguageManagement.Pages.LanguageManagement.EditModel.LanguageEditModalView) }
                    );
            });

            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(LanguageManagementResource), typeof(LanguageManagementWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(LanguageManagementWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new LanguageManagementMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LanguageManagementWebModule>();
            });

            Configure<RazorPagesOptions>(options =>
            {

            });

            context.Services.AddAutoMapperObjectMapper<LanguageManagementWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LanguageManagementWebAutoMapperProfile>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizeFolder("/LanguageManagement/", LanguageManagementPermissions.Languages.Default);
                options.Conventions.AuthorizeFolder("/LanguageManagement/Edit/", LanguageManagementPermissions.Languages.Edit);
                options.Conventions.AuthorizeFolder("/LanguageManagement/Create/", LanguageManagementPermissions.Languages.Create);
                options.Conventions.AuthorizeFolder("/LanguageManagement/Texts/", LanguageManagementPermissions.LanguageTexts.Default);
                options.Conventions.AuthorizeFolder("/LanguageManagement/Texts/Edit/", LanguageManagementPermissions.LanguageTexts.Edit);
            });

            Configure<AbpPageToolbarOptions>(options =>
            {
                options.Configure<Volo.Abp.LanguageManagement.Pages.LanguageManagement.IndexModel>(
                    toolbar =>
                    {
                        toolbar.AddButton(
                            LocalizableString.Create<LanguageManagementResource>("CreateNewLanguage"),
                            icon: "plus",
                            id: "CreateNewLanguageButtonId",
                            requiredPolicyName: LanguageManagementPermissions.Languages.Create
                        );
                    }
                );
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LanguageManagementWebModule>(context);
        }
    }
}
