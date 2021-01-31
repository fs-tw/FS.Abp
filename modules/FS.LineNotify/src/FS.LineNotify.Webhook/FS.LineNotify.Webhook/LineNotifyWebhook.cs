using FS.LineNotify.Localization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.EventBus.Distributed;

namespace FS.LineNotify.Webhook
{
    [RemoteService]
    [Route("webhook/line-notify")]
    public class LineNotifyWebhook : AbpController
    {
        private readonly IDistributedEventBus _distributedEventBus;
        private readonly ILineNotifyGateway _lineNotifyGateway;

        public LineNotifyWebhook(
            IDistributedEventBus distributedEventBus,
            ILineNotifyGateway lineNotifyGateway
            )
        {
            LocalizationResource = typeof(LineNotifyResource);
            _distributedEventBus = distributedEventBus;
            _lineNotifyGateway = lineNotifyGateway;
        }

        [HttpGet]
        [Route("call-back")]
        public async Task<ActionResult> CallBackAsync(string code, string state)
        {
            //state={serviceDefinition}_{channel}_{redirectUrl}
            var splistr = state.Split("_");
            if (splistr.Length != 4) throw new Exception("state format error！");//todo create a business exception

            string clientName = splistr[0];
            string serviceDefinition = splistr[1];
            string channel = splistr[2];
            string redirectUrl = splistr[3];

            var token = (await _lineNotifyGateway.TokenAsync(serviceDefinition, code)).access_token;

            await _distributedEventBus.PublishAsync(new LoginCallBackEto()
            {
                ClientName=clientName,
                ServiceDefinition = serviceDefinition,
                Channel = channel,
                AccessToken = token
            });
            return Redirect(redirectUrl);
        }

    }
}
