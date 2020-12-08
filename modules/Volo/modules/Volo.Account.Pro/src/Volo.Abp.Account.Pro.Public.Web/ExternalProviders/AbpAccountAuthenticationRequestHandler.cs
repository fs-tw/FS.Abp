using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Volo.Abp.Account.Public.Web.ExternalProviders
{
    public class AbpAccountAuthenticationRequestHandler<TOptions, THandler> : IAuthenticationRequestHandler
        where TOptions : RemoteAuthenticationOptions, new()
        where THandler : RemoteAuthenticationHandler<TOptions>
    {
        private readonly THandler _innerHandler;
        private readonly IOptions<TOptions> _optionsManager;

        public AbpAccountAuthenticationRequestHandler(THandler innerHandler, IOptions<TOptions> optionsManager)
        {
            _innerHandler = innerHandler;
            _optionsManager = optionsManager;
        }

        public async Task InitializeAsync(AuthenticationScheme scheme, HttpContext context)
        {
            await _optionsManager.SetAsync(scheme.Name);
            await _innerHandler.InitializeAsync(scheme, context);
        }

        public async Task<AuthenticateResult> AuthenticateAsync()
        {
            await _optionsManager.SetAsync();
            return await _innerHandler.AuthenticateAsync();
        }

        public async Task ChallengeAsync(AuthenticationProperties properties)
        {
            await _optionsManager.SetAsync();
            await _innerHandler.ChallengeAsync(properties);
        }

        public async Task ForbidAsync(AuthenticationProperties properties)
        {
            await _optionsManager.SetAsync();
            await _innerHandler.ForbidAsync(properties);
        }

        public async Task<bool> HandleRequestAsync()
        {
            await _optionsManager.SetAsync();
            return await _innerHandler.HandleRequestAsync();
        }

        public THandler GetHandler()
        {
            return _innerHandler;
        }
    }
}
