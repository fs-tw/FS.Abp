using FS.LineNotify;
using FS.LineNotify.Localization;
using FS.LineNotify.ServiceDefinitions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.LineNotify
{
    public class LineNotifyAppService : ApplicationService, ILineNotifyAppService
    {
        private readonly ILineNotifyGateway lineNotifyGateway;

        public LineNotifyAppService(
            ILineNotifyGateway lineNotifyApi
            )
        {
            this.lineNotifyGateway = lineNotifyApi;
            LocalizationResource = typeof(LineNotifyResource);
            ObjectMapperContext = typeof(LineNotifyApplicationModule);

        }


        public async Task<string> TokenAsync(string no, string code)
        {            
            var token = await this.lineNotifyGateway.TokenAsync(no, code);
            return token.access_token;
        }

        public async Task<string> AuthorizeUrl(string serviceDefinition,string channel, string clientRedirectUrl) 
        {
            var url = await this.lineNotifyGateway.AuthorizeUrl(serviceDefinition, channel, clientRedirectUrl);
            return url;
        }
        public async Task NotifyAsyn(string message, string channel)
        {
            await this.lineNotifyGateway.NotifyAsync(message, channel);
        }

    }
}
