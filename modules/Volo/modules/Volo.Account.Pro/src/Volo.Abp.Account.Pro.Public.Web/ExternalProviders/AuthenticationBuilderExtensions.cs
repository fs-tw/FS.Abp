using System.Linq;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;

namespace Volo.Abp.Account.Public.Web.ExternalProviders
{
    public static class AuthenticationBuilderExtensions
    {
        public static AuthenticationBuilder AddAbpAccountDynamicOptions<TOptions, THandler>(this AuthenticationBuilder authenticationBuilder)
            where TOptions : RemoteAuthenticationOptions, new()
            where THandler : RemoteAuthenticationHandler<TOptions>
        {
            authenticationBuilder.Services.AddScoped(typeof(AccountExternalProviderOptionsManager<TOptions>));

            authenticationBuilder.Services.Replace(ServiceDescriptor.Scoped(typeof(IOptions<TOptions>),
                provider => provider.GetRequiredService<AccountExternalProviderOptionsManager<TOptions>>()));
            authenticationBuilder.Services.Replace(ServiceDescriptor.Scoped(typeof(IOptionsSnapshot<TOptions>),
                provider => provider.GetRequiredService<AccountExternalProviderOptionsManager<TOptions>>()));
            authenticationBuilder.Services.Replace(ServiceDescriptor.Scoped(typeof(IOptionsMonitor<TOptions>),
                provider => provider.GetRequiredService<AccountExternalProviderOptionsManager<TOptions>>()));

            authenticationBuilder.Services.Replace(ServiceDescriptor.Transient<IOptionsFactory<TOptions>, AccountExternalProviderOptionsFactory<TOptions>>());

            var handler = authenticationBuilder.Services.LastOrDefault(x => x.ServiceType == typeof(THandler));
            authenticationBuilder.Services.Replace(new ServiceDescriptor(
                typeof(THandler),
                provider => ActivatorUtilities.CreateInstance<AbpAccountAuthenticationRequestHandler<TOptions, THandler>>(provider, ActivatorUtilities.CreateInstance(provider, typeof(THandler))),
                handler?.Lifetime ?? ServiceLifetime.Transient));

            return authenticationBuilder;
        }
    }
}
