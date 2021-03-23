using FS.Abp.Authentication.External;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Authentication.External.Google
{
    [DependsOn(
        typeof(AuthenticationDomainModule)
    )]
    public class AuthenticationExternalGoogleModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            Configure<ExternalAuthProviderOptions>(options =>
            {
                options.ExternalAuthProviders.AddOrReplace(
                    new ExternalAuthProviderConfiguration(
                    "Google",
                    typeof(GoogleExternalAuthProvider)
                    ));

            });
        }
    }
}
