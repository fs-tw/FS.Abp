using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using MyCompanyName.MyProjectName;

namespace Volo.Abp.LeptonTheme.IdentityServer
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<LeptonThemeDemoIdentityServerModule>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.InitializeApplication();
        }
    }
}
