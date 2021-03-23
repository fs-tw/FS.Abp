using RestSharp;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External.Google
{
    public class GoogleUserInfo
    {
        public string id { get; set; }
        public string email { get; set; }
        public bool verified_email { get; set; }
        public string name { get; set; }
        public string given_name { get; set; }
        public string family_name { get; set; }
        public string picture { get; set; }
        public string locale { get; set; }

    }
    public class GoogleExternalAuthProvider : IExternalAuthProvider
    {
        public async Task<ExternalAuthUserInfo> GetUserInfoAsync(NameValueCollection raw)
        {
            var idToken = raw["id_token"];

            var client = new RestClient("https://oauth2.googleapis.com/tokeninfo");
            var request = new RestRequest();
            request.AddQueryParameter("id_token", idToken);
            var result = await client.GetAsync<GoogleUserInfo>(request);
            if (result == null) throw new Exception("access_token invalid");
            return new ExternalAuthUserInfo()
            {
                ProviderKey = "Google",
                Name = result.given_name,
                EmailAddress = result.email,
                UserName = result.name
            };
        }
    }
}
