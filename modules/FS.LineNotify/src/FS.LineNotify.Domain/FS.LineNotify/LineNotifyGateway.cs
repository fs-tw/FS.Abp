using FS.LineNotify.Models;
using FS.LineNotify.ServiceDefinitions;
using FS.LineNotify.Channels;
using RestSharp;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Extensions.Options;
using Volo.Abp.EventBus.RabbitMq;

namespace FS.LineNotify
{
    public class LineNotifyGateway : ILineNotifyGateway
    {
        const string BotUrl = "https://notify-bot.line.me";
        const string ApiUrl = "https://notify-api.line.me";
        const string AuthorizeApi = "oauth/authorize";
        const string TokenApi = "oauth/token";
        const string NotifyApi = "api/notify";
        const string StatusApi = "api/status";
        const string RevokeApi = "api/revoke";
        private readonly AbpRabbitMqEventBusOptions eventBusOptions;
        private readonly IServiceDefinitionStore serviceDefinitionStore;
        private readonly IChannelStore channelStore;

        public LineNotifyGateway(
            IOptions<AbpRabbitMqEventBusOptions> eventBusOptions,
            IServiceDefinitionStore serviceDefinitionStore,
            IChannelStore channelStore
            )
        {
            this.eventBusOptions = eventBusOptions.Value;
            this.serviceDefinitionStore = serviceDefinitionStore;
            this.channelStore = channelStore;
        }
        public async Task<string> AuthorizeUrl(string serviceDefinition, string channel, string clientRedirectUrl)
        {
            var state = $"{eventBusOptions.ClientName}_{serviceDefinition}_{channel}_{clientRedirectUrl}";
            var service = await this.serviceDefinitionStore.GetDefinitionAsync(serviceDefinition);

            var query = new Dictionary<string, string>();

            query.Add("response_type", "code");
            query.Add("client_id", service.ClientId);
            query.Add("redirect_uri", service.Redirect_uri);
            query.Add("scope", "notify");
            query.Add("state", state);

            var list = query.Select(x => string.Format("{0}={1}", x.Key, HttpUtility.UrlEncode(x.Value)));

            return $"{BotUrl}/{AuthorizeApi}?{string.Join("&", list)}";
        }
        public async Task<TokenResponse> TokenAsync(string serviceDefinition, string code)
        {
            var service = await this.serviceDefinitionStore.GetDefinitionAsync(serviceDefinition);
            var client = new RestClient(BotUrl);
            var request = new RestRequest(TokenApi);

            var requestObject = new TokenRequest()
            {
                client_id = service.ClientId,
                client_secret = service.ClientSecret,
                grant_type = "authorization_code",
                code = code,
                redirect_uri = service.Redirect_uri
            };
            request.AddObject(requestObject);
            var m = await client.PostAsync<TokenResponse>(request);
            return m;
        }

        public async Task NotifyAsync(string message, string channel)
        {
            var accessToken = this.channelStore.Get(channel).AccessToken;
            var client = new RestClient(ApiUrl);

            var request = new RestRequest(NotifyApi);

            var requestObject = new NotifyRequest()
            {
                message = message
            };
            request.AddObject(requestObject);
            request.AddParameter("Authorization", $"Bearer {accessToken}", ParameterType.HttpHeader);
            await client.PostAsync<NotifyResponse>(request);
        }

        public async Task<StatusResponse> StatusAsync(string channel)
        {
            var accessToken = this.channelStore.Get(channel).AccessToken;
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(StatusApi);
            request.AddParameter("Authorization", $"Bearer {accessToken}", ParameterType.HttpHeader);
            var requestObject = new StatusRequest()
            {
            };
            request.AddObject(requestObject);
            return await client.GetAsync<StatusResponse>(request);
        }
        public async Task RevokeAsync(string channel)
        {
            var accessToken = this.channelStore.Get(channel).AccessToken;
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(RevokeApi);
            request.AddParameter("Authorization", $"Bearer {accessToken}", ParameterType.HttpHeader);
            var requestObject = new RevokeRequest()
            {
            };
            request.AddObject(requestObject);
            await client.PostAsync<RevokeResponse>(request);
        }

    }
}
