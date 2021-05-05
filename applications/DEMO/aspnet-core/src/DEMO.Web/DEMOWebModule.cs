using System.IO;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using DEMO.EntityFrameworkCore;
using DEMO.Localization;
using DEMO.MultiTenancy;
using DEMO.Permissions;
using DEMO.Web.Menus;
using Microsoft.OpenApi.Models;
using Volo.Abp;
using Volo.Abp.Account.Admin.Web;
using Volo.Abp.Account.Public.Web;
using Volo.Abp.Account.Public.Web.ExternalProviders;
using Volo.Abp.Account.Web;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AuditLogging.Web;
using Volo.Abp.Autofac;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity.Web;
using Volo.Abp.IdentityServer.Web;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.Web;
using Volo.Abp.TextTemplateManagement.Web;
using Volo.Abp.UI.Navigation.Urls;
using Volo.Abp.UI;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.Host;
using System;
using Microsoft.AspNetCore.Authentication.MicrosoftAccount;
using Microsoft.AspNetCore.Authentication.Twitter;
using DEMO.Web.HealthChecks;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.AspNetCore.Serilog;
using Volo.Abp.Swashbuckle;

namespace DEMO.Web
{
    [DependsOn(
        typeof(DEMOHttpApiModule),
        typeof(DEMOApplicationModule),
        typeof(DEMOEntityFrameworkCoreDbMigrationsModule),
        typeof(AbpAutofacModule),
        typeof(AbpIdentityWebModule),
        typeof(AbpAccountPublicWebIdentityServerModule),
        typeof(AbpAuditLoggingWebModule),
        typeof(LeptonThemeManagementWebModule),
        typeof(SaasHostWebModule),
        typeof(AbpAccountAdminWebModule),
        typeof(AbpIdentityServerWebModule),
        typeof(LanguageManagementWebModule),
        typeof(AbpAspNetCoreMvcUiLeptonThemeModule),
        typeof(TextTemplateManagementWebModule),
        typeof(AbpSwashbuckleModule),
        typeof(AbpAspNetCoreSerilogModule)
        )]
    [DependsOn(
        typeof(FS.FormManagement.Web.FormManagementWebModule)
        )]
    public class DEMOWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(
                    typeof(DEMOResource),
                    typeof(DEMODomainModule).Assembly,
                    typeof(DEMODomainSharedModule).Assembly,
                    typeof(DEMOApplicationModule).Assembly,
                    typeof(DEMOApplicationContractsModule).Assembly,
                    typeof(DEMOWebModule).Assembly
                );
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var hostingEnvironment = context.Services.GetHostingEnvironment();
            var configuration = context.Services.GetConfiguration();

            ConfigureBundles();
            ConfigureUrls(configuration);
            ConfigurePages(configuration);
            ConfigureAuthentication(context, configuration);
            ConfigureAutoMapper();
            ConfigureVirtualFileSystem(hostingEnvironment);
            ConfigureNavigationServices();
            ConfigureAutoApiControllers();
            ConfigureSwaggerServices(context.Services);
            ConfigureExternalProviders(context);
            ConfigureHealthChecks(context);
        }

        private void ConfigureHealthChecks(ServiceConfigurationContext context)
        {
            context.Services.AddDEMOHealthChecks();
        }

        private void ConfigureBundles()
        {
            Configure<AbpBundlingOptions>(options =>
            {
                options.StyleBundles.Configure(
                    LeptonThemeBundles.Styles.Global,
                    bundle =>
                    {
                        bundle.AddFiles("/global-styles.css");
                    }
                );
            });
        }

        private void ConfigurePages(IConfiguration configuration)
        {
            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/HostDashboard", DEMOPermissions.Dashboard.Host);
                options.Conventions.AuthorizePage("/TenantDashboard", DEMOPermissions.Dashboard.Tenant);
            });
        }

        private void ConfigureUrls(IConfiguration configuration)
        {
            Configure<AppUrlOptions>(options =>
            {
                options.Applications["MVC"].RootUrl = configuration["App:SelfUrl"];
            });
        }

        private void ConfigureAuthentication(ServiceConfigurationContext context, IConfiguration configuration)
        {
            context.Services.AddAuthentication()
                .AddJwtBearer(options =>
                {
                    options.Authority = configuration["AuthServer:Authority"];
                    options.RequireHttpsMetadata =  Convert.ToBoolean(configuration["AuthServer:RequireHttpsMetadata"]);;
                    options.Audience  = "DEMO";
                });
        }

        private void ConfigureAutoMapper()
        {
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<DEMOWebModule>();
            });
        }

        private void ConfigureVirtualFileSystem(IWebHostEnvironment hostingEnvironment)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<DEMOWebModule>();

                if (hostingEnvironment.IsDevelopment())
                {
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMODomainSharedModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}DEMO.Domain.Shared", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMODomainModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}DEMO.Domain", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMOApplicationContractsModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}DEMO.Application.Contracts", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMOApplicationModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}DEMO.Application", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMOHttpApiModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}DEMO.HttpApi", Path.DirectorySeparatorChar)));
                    options.FileSets.ReplaceEmbeddedByPhysical<DEMOWebModule>(hostingEnvironment.ContentRootPath);
                }
            });
        }

        private void ConfigureNavigationServices()
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new DEMOMenuContributor());
            });

            Configure<AbpToolbarOptions>(options =>
            {
                options.Contributors.Add(new DEMOToolbarContributor());
            });
        }

        private void ConfigureAutoApiControllers()
        {
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(DEMOApplicationModule).Assembly);
            });
        }

        private void ConfigureSwaggerServices(IServiceCollection services)
        {
            services.AddSwaggerGen(
                options =>
                {
                    options.SwaggerDoc("v1", new OpenApiInfo { Title = "DEMO API", Version = "v1" });
                    options.DocInclusionPredicate((docName, description) => true);
                    options.CustomSchemaIds(type => type.FullName);
                }
            );
        }

        private void ConfigureExternalProviders(ServiceConfigurationContext context)
        {
            context.Services.AddAuthentication()
                .AddGoogle(GoogleDefaults.AuthenticationScheme, _ => {})
                .WithDynamicOptions<GoogleOptions, GoogleHandler>(
                    GoogleDefaults.AuthenticationScheme,
                    options =>
                    {
                        options.WithProperty(x => x.ClientId);
                        options.WithProperty(x => x.ClientSecret, isSecret: true);
                    }
                )
                .AddMicrosoftAccount(MicrosoftAccountDefaults.AuthenticationScheme, options =>
                {
                    //Personal Microsoft accounts as an example.
                    options.AuthorizationEndpoint = "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize";
                    options.TokenEndpoint = "https://login.microsoftonline.com/consumers/oauth2/v2.0/token";
                })
                .WithDynamicOptions<MicrosoftAccountOptions, MicrosoftAccountHandler>(
                    MicrosoftAccountDefaults.AuthenticationScheme,
                    options =>
                    {
                        options.WithProperty(x => x.ClientId);
                        options.WithProperty(x => x.ClientSecret, isSecret: true);
                    }
                )
                .AddTwitter(TwitterDefaults.AuthenticationScheme, options => options.RetrieveUserDetails = true)
                .WithDynamicOptions<TwitterOptions, TwitterHandler>(
                    TwitterDefaults.AuthenticationScheme,
                    options =>
                    {
                        options.WithProperty(x => x.ConsumerKey);
                        options.WithProperty(x => x.ConsumerSecret, isSecret: true);
                    }
                );
        }


        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAbpRequestLocalization();

            if (!env.IsDevelopment())
            {
                app.UseErrorPage();
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCorrelationId();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseJwtTokenMiddleware();

            if (MultiTenancyConsts.IsEnabled)
            {
                app.UseMultiTenancy();
            }

            app.UseUnitOfWork();
            app.UseIdentityServer();
            app.UseAuthorization();
            app.UseSwagger();
            app.UseAbpSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "DEMO API");
            });
            app.UseAuditing();
            app.UseAbpSerilogEnrichers();
            app.UseConfiguredEndpoints();
        }
    }
}
