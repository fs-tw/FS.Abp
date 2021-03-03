using FS.LineNotify;
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

namespace FS.LineNotify
{
    [RemoteService]
    [Route("api/line-notify")]
    public class LineNotifyApi : AbpController
    {
        private readonly ILineNotifyAppService _lineNotifyAppService;

        public LineNotifyApi(
            ILineNotifyAppService lineNotifyAppService
            )
        {
            LocalizationResource = typeof(LineNotifyResource);
            this._lineNotifyAppService = lineNotifyAppService;
        }

        [HttpGet]
        [Route("line-login")]
        public async Task<ActionResult> AuthorizeUrl(string serviceDefinition, string channel, string clientRedirectUrl)
        {
            var url = await this._lineNotifyAppService.AuthorizeUrl(serviceDefinition, channel, clientRedirectUrl);
            return Redirect(url);
        }

        [HttpGet]
        [Route("notify")]
        public async Task NotifyAsyn(string message, string channel)
        {
            await this._lineNotifyAppService.NotifyAsyn(message, channel);
        }

    }
}
