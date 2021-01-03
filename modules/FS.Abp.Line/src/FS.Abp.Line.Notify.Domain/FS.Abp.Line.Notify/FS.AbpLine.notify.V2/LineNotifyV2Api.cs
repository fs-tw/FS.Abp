using FS.Abp.Line.Notify.Models;
using Microsoft.Extensions.Configuration;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Volo.Abp.Users;

namespace FS.Abp.Line.Notify
{
    public class LineNotifyV2Api : ILineNotifyV2Api
    {
        const string BotUrl = "https://notify-bot.line.me";
        const string ApiUrl = "https://notify-api.line.me";
        const string AuthorizeApi = "oauth/authorize";
        const string TokenApi = "oauth/token";
        const string NotifyApi = "api/notify";
        const string StatusApi = "api/status";
        const string RevokeApi = "api/revoke";

        const string ClientId = "hM5M77ljQC9spILlhWW27N";        
        const string ClientSecret = "QczVLMoz831zQ9SQeWHqOJQtEtoZn1M2AEhznL2QfHu";
        const string RedirectUri = "/api/v2/line/notify/token";
        private readonly IConfiguration configuration;
        private readonly ICurrentUser curmrentUser;

        protected ILineNotifyConfiguration LineNotifyConfiguration { get; }

        public LineNotifyV2Api(
            ILineNotifyConfiguration lineNotifyConfiguration,
            IConfiguration configuration,
            ICurrentUser curmrentUser)
        {
            LineNotifyConfiguration = lineNotifyConfiguration;
            this.configuration = configuration;
            this.curmrentUser = curmrentUser;
        }

        /// <summary>
        ///  Line登入網址(有登入才能使用)
        /// </summary>
        /// <returns></returns>        
        public string AuthorizeUrl()
        {
            var query = new Dictionary<string, string>();
            var url = this.configuration["App:SelfUrl"] + RedirectUri;
            query.Add("response_type", "code");
            query.Add("client_id", ClientId);
            query.Add("redirect_uri", url);
            query.Add("scope", "notify");
            query.Add("state", this.curmrentUser.Id.ToString());

            var list = query.Select(x => string.Format("{0}={1}", x.Key, HttpUtility.UrlEncode(x.Value)));

            return $"{BotUrl}/{AuthorizeApi}?{string.Join("&", list)}";
        }


        /// <summary>
        /// 接收Line導回頁資料
        /// </summary>
        /// <param name="code"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task<bool> TokenAsync(string code, Guid userId)
        {
            var client = new RestClient(BotUrl);
            var request = new RestRequest(TokenApi);
            var url = this.configuration["App:SelfUrl"] + RedirectUri;
            var requestObject = new TokenRequest()
            {
                client_id = ClientId,
                client_secret = ClientSecret,
                grant_type = "authorization_code",
                code = code,
                redirect_uri = url
            };
            request.AddObject(requestObject);

            var m = client.Post<TokenResponse>(request);
            if (m.StatusCode != System.Net.HttpStatusCode.OK) return false;                 
            await LineNotifyConfiguration.SetTokenByUserAsync(userId, m.Data.access_token);
            return true;
        }



        /// <summary>
        /// line notify 發送個人訊息
        /// </summary>
        /// <param name="message"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task NotifyAsync(string message, Guid userId)
        {
            var client = new RestClient(ApiUrl);

            var request = new RestRequest(NotifyApi);

            var requestObject = new NotifyRequest()
            {
                message = message
            };
            var token = await LineNotifyConfiguration.GetTokenByUserAsync(userId);
            if (token.IsNullOrEmpty()) throw new Exception("無綁定Line notify");
            request.AddObject(requestObject);
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            client.Post<NotifyResponse>(request);
        }

        /// <summary>
        /// 顯示個人Line notify狀態
        /// </summary>
        /// <returns></returns>
        public async Task<StatusResponse> StatusAsync()
        {
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(StatusApi);
            var token = await LineNotifyConfiguration.GetTokenByUserAsync(curmrentUser.Id.Value);
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            var requestObject = new StatusRequest()
            {
            };
            request.AddObject(requestObject);
            return client.Get<StatusResponse>(request).Data;
        }

        /// <summary>
        /// 取消個人Line notify綁定
        /// </summary>
        /// <returns></returns>
        public async Task RevokeAsync()
        {

            if (!this.curmrentUser.Id.HasValue) throw new Exception("請登入會員");
            var client = new RestClient(ApiUrl);
            var request = new RestRequest(RevokeApi);
            var token = await LineNotifyConfiguration.GetTokenByUserAsync(curmrentUser.Id.Value);
            request.AddParameter("Authorization", $"Bearer {token}", ParameterType.HttpHeader);
            var requestObject = new RevokeRequest() { };
            request.AddObject(requestObject);
            client.Post<RevokeResponse>(request);
            await LineNotifyConfiguration.SetTokenByUserAsync(this.curmrentUser.Id.Value, "");
        }

    }
}
