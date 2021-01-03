using FS.Abp.Line.Notify.Models;
using RestSharp;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace FS.Abp.Line.Notify
{
    public class LineNotifyApi : ILineNotifyApi
    {
        const string BotUrl = "https://notify-bot.line.me";
        const string ApiUrl = "https://notify-api.line.me";
        const string AuthorizeApi = "oauth/authorize";
        const string TokenApi = "oauth/token";
        const string NotifyApi = "api/notify";
        const string StatusApi = "api/status";
        const string RevokeApi = "api/revoke";

        const string ClientId = "wBDL6Q1HRTQTf5PcEW3jt4";
        const string ClientSecret = "8cwgRr8LpQzjQmMMcNNARPUUcOgxI0LvreL5mNEpfLy";
        const string RedirectUri = "http://localhost:4200";
        const string State = "rnd-test";
        protected ILineNotifyConfiguration LineNotifyConfiguration { get; }

        public LineNotifyApi(ILineNotifyConfiguration lineNotifyConfiguration)
        {
            LineNotifyConfiguration = lineNotifyConfiguration;
        }
        public string AuthorizeUrl()
        {
            var query = new Dictionary<string, string>();

            query.Add("response_type", "code");
            query.Add("client_id", ClientId);
            query.Add("redirect_uri", RedirectUri);
            query.Add("scope", "notify");
            query.Add("state", State);

            var list = query.Select(x => string.Format("{0}={1}", x.Key, HttpUtility.UrlEncode(x.Value)));

            return $"{BotUrl}/{AuthorizeApi}?{string.Join("&", list)}";
        }
        public async Task TokenAsync(string code)
        {
            var client = new RestClient(BotUrl);
            var request = new RestRequest(TokenApi);

            var requestObject = new TokenRequest()
            {
                client_id = ClientId,
                client_secret = ClientSecret,
                grant_type = "authorization_code",
                code = code,
                redirect_uri = RedirectUri
            };
            request.AddObject(requestObject);

            var m = client.Post<TokenResponse>(request);

            await LineNotifyConfiguration.SetTokenAsync(m.Data.access_token);
        }

        public async Task NotifyAsync(string message)
        {
            var client = new RestClient(ApiUrl);

            var request = new RestRequest(NotifyApi);

            var requestObject = new NotifyRequest()
            {
                message = message
            };
            var token = await LineNotifyConfiguration.GetTokenAsync();
            request.AddObject(requestObject);
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            var m = client.Post<NotifyResponse>(request);
        }

        public async Task<StatusResponse> StatusAsync()
        {
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(StatusApi);
            var token = await LineNotifyConfiguration.GetTokenAsync();
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            var requestObject = new StatusRequest()
            {
            };
            request.AddObject(requestObject);
            return client.Get<StatusResponse>(request).Data;
        }
        public async Task RevokeAsync()
        {
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(RevokeApi);
            var token = await LineNotifyConfiguration.GetTokenAsync();
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            var requestObject = new RevokeRequest()
            {
            };
            request.AddObject(requestObject);
            var m = client.Post<RevokeResponse>(request);
        }

    }
}
