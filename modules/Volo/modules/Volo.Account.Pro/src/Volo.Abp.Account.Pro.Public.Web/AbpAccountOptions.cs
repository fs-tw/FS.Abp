using System.Collections.Generic;

namespace Volo.Abp.Account.Public.Web
{
    public class AbpAccountOptions
    {
        /// <summary>
        /// Default value: "Windows".
        /// </summary>
        public string WindowsAuthenticationSchemeName { get; set; }
        
        public Dictionary<string, string> ExternalProviderIconMap = new Dictionary<string, string>
        {
            { "Amazon", "fa fa-amazon" },
            { "Apple", "fa fa-apple" },
            { "BattleNet", "fab fa-battle-net" },
            { "Discord", "fab fa-discord" },
            { "Dropbox", "fa fa-dropbox" },
            { "Facebook", "fa fa-facebook" },
            { "GitHub", "fa fa-github" },
            { "Google", "fa fa-google" },
            { "Instagram", "fa fa-instagram" },
            { "LinkedIn", "fa fa-linkedin" },
            { "Microsoft", "fa fa-windows" },
            { "Twitch", "fa fa-twitch" },
            { "Twitter", "fa fa-twitter" },
            { "Yandex", "fab fa-yandex-international" },
            { "Weibo", "fa fa-weibo" }
        };
        
        public AbpAccountOptions()
        {
            //TODO: This makes us depend on the Microsoft.AspNetCore.Server.IISIntegration package.
            WindowsAuthenticationSchemeName = "Windows"; //Microsoft.AspNetCore.Server.IISIntegration.IISDefaults.AuthenticationScheme;
        }
    }
}
