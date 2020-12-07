using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.TextTemplateManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplateManagement.Authorization;
using Volo.Abp.TextTemplateManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.TextTemplateManagement.Web
{
    [DependsOn(
        typeof(TextTemplateManagementHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeSharedModule),
        typeof(AbpAutoMapperModule)
        )]
    public class TextTemplateManagementWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(TextTemplateManagementResource), typeof(TextTemplateManagementWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(TextTemplateManagementWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new TextTemplateManagementMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<TextTemplateManagementWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<TextTemplateManagementWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<TextTemplateManagementWebModule>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/TextTemplates/", TextTemplateManagementPermissions.TextTemplates.Default);
                options.Conventions.AuthorizePage("/TextTemplates/Index", TextTemplateManagementPermissions.TextTemplates.Default);

                options.Conventions.AuthorizePage("/TextTemplates/Contents/", TextTemplateManagementPermissions.TextTemplates.EditContents);
                options.Conventions.AuthorizePage("/TextTemplates/Contents/Index", TextTemplateManagementPermissions.TextTemplates.EditContents);
                options.Conventions.AuthorizePage("/TextTemplates/Contents/InlineContent", TextTemplateManagementPermissions.TextTemplates.EditContents);
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<TextTemplateManagementWebModule>(context);
        }
    }
}
