using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Hosting;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.Autofac;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.SqlServer;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.Identity.Web;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton;
using Volo.Saas.Host;
using Volo.Saas.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Account;
using Volo.Abp.Account.Public.Web;
using Volo.Abp.VirtualFileSystem;
using System.IO;
using Volo.Abp.Threading;
using System;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;

namespace Volo.Abp.Identity.Pro.DemoApp
{
    [DependsOn(
        typeof(AbpIdentityWebModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpIdentityEntityFrameworkCoreModule),

        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpPermissionManagementDomainIdentityModule),

        typeof(AbpAutofacModule),
        typeof(AbpEntityFrameworkCoreSqlServerModule),

        typeof(AbpAutofacModule),
        typeof(AbpAccountPublicWebModule),
        typeof(AbpAccountSharedApplicationModule),

        typeof(AbpAuditLoggingEntityFrameworkCoreModule),
        typeof(AbpSettingManagementEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpPermissionManagementDomainIdentityModule),

        typeof(SaasHostWebModule),
        typeof(SaasHostApplicationModule),
        typeof(SaasEntityFrameworkCoreModule),

        typeof(AbpFeatureManagementWebModule),
        typeof(AbpFeatureManagementApplicationModule),
        typeof(AbpFeatureManagementEntityFrameworkCoreModule),

        typeof(AbpAspNetCoreMvcUiLeptonThemeModule),
        typeof(LeptonThemeManagementWebModule),
        typeof(LeptonThemeManagementApplicationModule),
        typeof(LeptonThemeManagementDomainModule),

        typeof(BlobStoringDatabaseEntityFrameworkCoreModule)
        )]
    public class DemoAppModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var hostingEnvironment = context.Services.GetHostingEnvironment();
            var configuration = context.Services.GetConfiguration();

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = configuration.GetConnectionString("Default");
            });

            Configure<AbpDbContextOptions>(options =>
            {
                options.UseSqlServer();
            });

            if (hostingEnvironment.IsDevelopment())
            {
                Configure<AbpVirtualFileSystemOptions>(options =>
                {
                    var path = Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}Volo.Abp.Identity.Pro.Web", Path.DirectorySeparatorChar));
                    Console.WriteLine("ProPath:" + path);
                    options.FileSets.ReplaceEmbeddedByPhysical<AbpIdentityWebModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}Volo.Abp.Identity.Pro.Web", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<AbpIdentityApplicationModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}Volo.Abp.Identity.Pro.Application", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<AbpIdentityApplicationContractsModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}Volo.Abp.Identity.Pro.Application.Contracts", Path.DirectorySeparatorChar)));
                });
            }

            context.Services.AddSwaggerGen(
                options =>
                {
                    options.SwaggerDoc("v1", new OpenApiInfo { Title = "IdentityManagement API", Version = "v1" });
                    options.DocInclusionPredicate((docName, description) => true);
                    options.CustomSchemaIds(type => type.FullName);
                });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Languages.Add(new LanguageInfo("en", "en", "English"));
                options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe"));
                options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "简体中文"));
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
            }

            app.UseVirtualFiles();
            app.UseRouting();

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Support APP API");
            });

            app.UseAuthentication();
            app.UseAuthorization();


            app.UseAbpRequestLocalization();

            app.UseAuditing();

            app.UseConfiguredEndpoints();

            using (var scope = context.ServiceProvider.CreateScope())
            {
                AsyncHelper.RunSync(async () =>
                {
                    await scope.ServiceProvider
                        .GetRequiredService<IDataSeeder>()
                        .SeedAsync();
                });
            }
        }
    }
}
