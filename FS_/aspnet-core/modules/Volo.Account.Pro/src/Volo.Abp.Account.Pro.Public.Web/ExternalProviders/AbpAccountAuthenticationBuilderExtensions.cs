using System;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account.ExternalProviders;

namespace Volo.Abp.Account.Public.Web.ExternalProviders
{
    public static class AbpAccountAuthenticationBuilderExtensions
    {
        public static AuthenticationBuilder WithDynamicOptions<TOptions, THandler>(
            [NotNull] this AuthenticationBuilder authenticationBuilder,
            [NotNull] string authenticationSchema,
            [NotNull] Action<ExternalProviderDefinitionBuilder<TOptions>> buildAction)
            where TOptions : RemoteAuthenticationOptions, new()
            where THandler : RemoteAuthenticationHandler<TOptions>
        {
            Check.NotNull(authenticationBuilder, nameof(authenticationBuilder));
            Check.NotNullOrWhiteSpace(authenticationSchema, nameof(authenticationSchema));
            Check.NotNull(buildAction, nameof(buildAction));

            authenticationBuilder.AddAbpAccountDynamicOptions<TOptions, THandler>();

            authenticationBuilder.Services.AddDynamicExternalLoginProviderOptions(
                authenticationSchema,
                buildAction
            );

            return authenticationBuilder;
        }
    }
}
