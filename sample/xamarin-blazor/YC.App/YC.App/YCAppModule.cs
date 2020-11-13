using System;
using System.Net.Http;
using FS.YC;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Autofac;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;


namespace YC.App
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(YCHttpApiClientModule),
        typeof(BSL.WebSite.WebSiteHttpApiClientModule)
    )]
    public class YCAppModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            //ConfigureAuthentication(builder);
            ConfigureHttpClient(context);
            //ConfigureBlazorise(context);
            //ConfigureRouter(context);
            //ConfigureUI(builder);
            //ConfigureMenu(context);
            //ConfigureAutoMapper(context);
        }

        //private void ConfigureRouter(ServiceConfigurationContext context)
        //{
        //    Configure<AbpRouterOptions>(options =>
        //    {
        //        options.AppAssembly = typeof(YCAppModule).Assembly;
        //    });
        //}

        //private void ConfigureMenu(ServiceConfigurationContext context)
        //{
        //    Configure<AbpNavigationOptions>(options =>
        //    {
        //        options.MenuContributors.Add(new YCMenuContributor());
        //    });
        //}

        //private void ConfigureBlazorise(ServiceConfigurationContext context)
        //{
        //    context.Services
        //        .AddBlazorise()
        //        .AddBootstrapProviders()
        //        .AddFontAwesomeIcons();
        //}

        //private static void ConfigureAuthentication(WebAssemblyHostBuilder builder)
        //{
        //    builder.Services.AddOidcAuthentication(options =>
        //    {
        //        builder.Configuration.Bind("AuthServer", options.ProviderOptions);
        //        options.UserOptions.RoleClaim = JwtClaimTypes.Role;
        //        options.ProviderOptions.DefaultScopes.Add("YC");
        //        options.ProviderOptions.DefaultScopes.Add("role");
        //        options.ProviderOptions.DefaultScopes.Add("email");
        //        options.ProviderOptions.DefaultScopes.Add("phone");
        //    });
        //}

        //private static void ConfigureUI(WebAssemblyHostBuilder builder)
        //{
        //    builder.RootComponents.Add<App>("app");
        //}

        private static void ConfigureHttpClient(ServiceConfigurationContext context)
        {
            context.Services.AddTransient(sp => new HttpClient
            {
                BaseAddress = new Uri(@"http://192.168.1.8:8001")
            });
            context.Services.Configure<AbpRemoteServiceOptions>(options =>
            {
                options.RemoteServices.Default =
                    new RemoteServiceConfiguration(@"http://192.168.1.8:8001");
            });
        }

        //private void ConfigureAutoMapper(ServiceConfigurationContext context)
        //{
        //    Configure<AbpAutoMapperOptions>(options =>
        //    {
        //        options.AddMaps<YCAppModule>();
        //    });
        //}

        //public override void OnApplicationInitialization(ApplicationInitializationContext context)
        //{
        //    context.ServiceProvider
        //        .UseBootstrapProviders()
        //        .UseFontAwesomeIcons();
        //}
    }
}
