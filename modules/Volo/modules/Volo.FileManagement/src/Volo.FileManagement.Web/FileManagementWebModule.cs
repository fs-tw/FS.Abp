using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.FileManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.FileManagement.Authorization;
using Volo.FileManagement.Web.Navigation;

namespace Volo.FileManagement.Web
{
    [DependsOn(
        typeof(FileManagementHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeSharedModule),
        typeof(AbpAutoMapperModule)
        )]
    public class FileManagementWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(FileManagementResource), typeof(FileManagementWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(FileManagementWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new FileManagementMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<FileManagementWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<FileManagementWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<FileManagementWebModule>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/FileManagement/", FileManagementPermissions.DirectoryDescriptor.Default);
                options.Conventions.AuthorizePage("/FileManagement/Index", FileManagementPermissions.DirectoryDescriptor.Default);
                
                options.Conventions.AuthorizePage("/FileManagement/Directory/ChangeNameModal", FileManagementPermissions.DirectoryDescriptor.Update);
                options.Conventions.AuthorizePage("/FileManagement/Directory/CreateModal", FileManagementPermissions.DirectoryDescriptor.Create);
                
                options.Conventions.AuthorizePage("/FileManagement/File/ChangeNameModal", FileManagementPermissions.FileDescriptor.Update);
                options.Conventions.AuthorizePage("/FileManagement/File/MoveModal", FileManagementPermissions.FileDescriptor.Update);
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<FileManagementWebModule>(context);
        }
    }
}
