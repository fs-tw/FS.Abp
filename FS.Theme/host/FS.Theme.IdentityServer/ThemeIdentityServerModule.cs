using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FS.Theme.MultiTenancy;
using StackExchange.Redis;
using Microsoft.OpenApi.Models;
using Volo.Abp;
using Volo.Abp.Account;
using Volo.Abp.Account.Web;
using Volo.Abp.AspNetCore.Authentication.JwtBearer;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton;
using Volo.Abp.Auditing;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.Caching;
using Volo.Abp.Caching.StackExchangeRedis;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.SqlServer;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.LeptonTheme;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.Swashbuckle;
using Volo.Abp.Threading;
using Volo.Abp.UI.Navigation.Urls;
using Volo.Saas.EntityFrameworkCore;
using Volo.Saas.Host;

namespace FS.Theme
{
    [DependsOn(
        typeof(AbpAccountPublicWebIdentityServerModule),
        typeof(AbpAccountPublicApplicationModule),
        typeof(AbpAspNetCoreMvcUiMultiTenancyModule),
        typeof(AbpAspNetCoreMvcModule),
        typeof(AbpAspNetCoreMvcUiLeptonThemeModule),
        typeof(AbpAuditLoggingEntityFrameworkCoreModule),
        typeof(AbpAutofacModule),
        typeof(AbpCachingStackExchangeRedisModule),
        typeof(AbpEntityFrameworkCoreSqlServerModule),
        typeof(AbpIdentityEntityFrameworkCoreModule),
        typeof(AbpIdentityApplicationModule),
        typeof(AbpIdentityHttpApiModule),
        typeof(AbpIdentityServerEntityFrameworkCoreModule),
        typeof(LeptonThemeManagementHttpApiModule),
        typeof(LeptonThemeManagementApplicationModule),
        typeof(LeptonThemeManagementDomainModule),
        typeof(AbpPermissionManagementDomainIdentityModule),
        typeof(AbpPermissionManagementEntityFrameworkCoreModule),
        typeof(AbpPermissionManagementApplicationModule),
        typeof(AbpPermissionManagementHttpApiModule),
        typeof(AbpSettingManagementEntityFrameworkCoreModule),
        typeof(AbpFeatureManagementHttpApiModule),
        typeof(AbpFeatureManagementApplicationModule),
        typeof(AbpFeatureManagementEntityFrameworkCoreModule),
        typeof(SaasEntityFrameworkCoreModule),
        typeof(SaasHostApplicationModule),
        typeof(SaasHostHttpApiModule),
        typeof(AbpAspNetCoreAuthenticationJwtBearerModule),
        typeof(BlobStoringDatabaseEntityFrameworkCoreModule),
        typeof(ThemeApplicationContractsModule),
        typeof(AbpSwashbuckleModule)
        )]
    public class ThemeIdentityServerModule : AbpModule
    {
        private const string DefaultCorsPolicyName = "Default";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var hostingEnvironment = context.Services.GetHostingEnvironment();
            var configuration = context.Services.GetConfiguration();

            Configure<AbpDbContextOptions>(options =>
            {
                options.UseSqlServer();
            });

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
                options.Languages.Add(new LanguageInfo("en", "en", "English", flagIcon: "gb"));
                options.Languages.Add(new LanguageInfo("pt-BR", "pt-BR", "Português (Brasil)", flagIcon: "br"));
                options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe", flagIcon: "tr"));
                options.Languages.Add(new LanguageInfo("zh-Hans", "zh-Hans", "Chinese", flagIcon: "cn"));
            });

            Configure<AbpAuditingOptions>(options =>
            {
                //options.IsEnabledForGetRequests = true;
                options.ApplicationName = "AuthServer";
            });

            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled = MultiTenancyConsts.IsEnabled;
            });

            Configure<AppUrlOptions>(options =>
            {
                options.Applications["MVC"].RootUrl = configuration["App:SelfUrl"];
            });

            context.Services.AddAuthentication()
                .AddJwtBearer(options =>
                {
                    options.Authority = configuration["AuthServer:Authority"];
                    options.RequireHttpsMetadata = Convert.ToBoolean(configuration["AuthServer:RequireHttpsMetadata"]);
                    options.Audience = configuration["AuthServer:ApiName"];
                });

            Configure<AbpDistributedCacheOptions>(options =>
            {
                options.KeyPrefix = "Theme:";
            });

            if (!hostingEnvironment.IsDevelopment())
            {
                var redis = ConnectionMultiplexer.Connect(configuration["Redis:Configuration"]);
                context.Services
                    .AddDataProtection()
                    .PersistKeysToStackExchangeRedis(redis, "Theme-Protection-Keys");
            }

            context.Services.AddCors(options =>
            {
                options.AddPolicy(DefaultCorsPolicyName, builder =>
                {
                    builder
                        .WithOrigins(
                            configuration["App:CorsOrigins"]
                                .Split(",", StringSplitOptions.RemoveEmptyEntries)
                                .Select(o => o.RemovePostFix("/"))
                                .ToArray()
                        )
                        .WithAbpExposedHeaders()
                        .SetIsOriginAllowedToAllowWildcardSubdomains()
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();

            if (!context.GetEnvironment().IsDevelopment())
            {
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseCorrelationId();
            app.UseVirtualFiles();
            app.UseRouting();
            app.UseCors(DefaultCorsPolicyName);
            app.UseAuthentication();
            app.UseJwtTokenMiddleware();

            if (MultiTenancyConsts.IsEnabled)
            {
                app.UseMultiTenancy();
            }

            app.UseAbpRequestLocalization();
            app.UseIdentityServer();
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
