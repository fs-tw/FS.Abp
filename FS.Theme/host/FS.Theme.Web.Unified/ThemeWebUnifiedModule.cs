using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FS.Theme.EntityFrameworkCore;
using FS.Theme.MultiTenancy;
using FS.Theme.Web;
using Microsoft.OpenApi.Models;
using Volo.Abp;
using Volo.Abp.Account;
using Volo.Abp.Account.Public.Web;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.SqlServer;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.Identity.Web;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.Threading;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.EntityFrameworkCore;
using Volo.Saas.Host;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Swashbuckle;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeWebModule),
        typeof(ThemeApplicationModule),
        typeof(ThemeEntityFrameworkCoreModule),
        typeof(AbpAuditLoggingEntityFrameworkCoreModule),
        typeof(AbpAutofacModule),
        typeof(AbpAccountPublicWebModule),
        typeof(AbpAccountPublicApplicationModule),
        typeof(AbpEntityFrameworkCoreSqlServerModule),
        typeof(AbpSettingManagementEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpIdentityWebModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpIdentityEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementDomainIdentityModule),
        typeof(LeptonThemeManagementWebModule),
        typeof(LeptonThemeManagementApplicationModule),
        typeof(LeptonThemeManagementDomainModule),
        typeof(AbpFeatureManagementWebModule),
        typeof(AbpFeatureManagementApplicationModule),
        typeof(AbpFeatureManagementEntityFrameworkCoreModule),
        typeof(SaasHostWebModule),
        typeof(SaasHostApplicationModule),
        typeof(SaasEntityFrameworkCoreModule),
        typeof(AbpAspNetCoreMvcUiLeptonThemeModule),
        typeof(BlobStoringDatabaseEntityFrameworkCoreModule),
        typeof(AbpSwashbuckleModule)
        )]
    public class ThemeWebUnifiedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var hostingEnvironment = context.Services.GetHostingEnvironment();
            var configuration = context.Services.GetConfiguration();

            Configure<AbpDbContextOptions>(options =>
            {
                options.UseSqlServer();
            });

            if (hostingEnvironment.IsDevelopment())
            {
                Configure<AbpVirtualFileSystemOptions>(options =>
                {
                    options.FileSets.ReplaceEmbeddedByPhysical<ThemeDomainSharedModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}FS.Theme.Domain.Shared", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<ThemeDomainModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}FS.Theme.Domain", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<ThemeApplicationContractsModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}FS.Theme.Application.Contracts", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<ThemeApplicationModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}FS.Theme.Application", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<ThemeWebModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}FS.Theme.Web", Path.DirectorySeparatorChar)));
                });
            }

            context.Services.AddSwaggerGen(
                options =>
                {
                    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Theme API", Version = "v1" });
                    options.DocInclusionPredicate((docName, description) => true);
                    options.CustomSchemaIds(type => type.FullName);
                });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Languages.Add(new LanguageInfo("cs", "cs", "Čeština", flagIcon: "cz"));
                options.Languages.Add(new LanguageInfo("en", "en", "English",flagIcon: "gb"));
                options.Languages.Add(new LanguageInfo("pt-BR", "pt-BR", "Português (Brasil)", flagIcon:"br"));
                options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe", flagIcon: "tr"));
                options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "Chinese", flagIcon: "cn"));
            });

            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled = MultiTenancyConsts.IsEnabled;
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();

            if (context.GetEnvironment().IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseErrorPage();
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseVirtualFiles();
            app.UseRouting();
            app.UseAuthentication();

            if (MultiTenancyConsts.IsEnabled)
            {
                app.UseMultiTenancy();
            }

            app.UseAbpRequestLocalization();
            app.UseAuthorization();

            app.UseSwagger();
            app.UseAbpSwaggerUI(options =>
            {
               options.SwaggerEndpoint("/swagger/v1/swagger.json", "Theme API");
            });

            app.UseAuditing();

            app.UseConfiguredEndpoints();

            SeedData(context);
        }

        private void SeedData(ApplicationInitializationContext context)
        {
            AsyncHelper.RunSync(async () =>
            {
                using (var scope = context.ServiceProvider.CreateScope())
                {
                    await scope.ServiceProvider
                        .GetRequiredService<IDataSeeder>()
                        .SeedAsync();
                }
            });
        }
    }
}
