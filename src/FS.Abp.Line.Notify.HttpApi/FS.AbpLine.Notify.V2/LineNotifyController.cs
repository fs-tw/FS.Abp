using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Line.Notify
{
    [Area("line")]
    [RemoteService(Name = "line")]
    [Route("api/v2/line/notify")]
    public class LineNotifyV2Controller : AbpController
    {
        private readonly ILineNotifyV2Api _lineNotifyApi;

        public LineNotifyV2Controller(ILineNotifyV2Api lineNotifyApi)
        {
            _lineNotifyApi = lineNotifyApi;
        }

       
        [Route("authorize-url")]
        [HttpPost]
        public string AuthorizeUrl()
        {
            return _lineNotifyApi.AuthorizeUrl();
        }


        [Route("token")]
        [HttpGet]
        public async Task<ContentResult> TokenAsync(string code,Guid state)
        {
            var mes = "認證成功";
            var result = await _lineNotifyApi.TokenAsync(code, state);
            if (!result) mes = "認證失敗";
            return new ContentResult
            {
                ContentType = "text/html;charset=utf-8",
                Content = $"<div>{mes}！</div>"
            };

        }

       
        [Route("notify")]
        [HttpPost]
        public async Task NotifyAsync(string message,Guid userId)
        {
            await _lineNotifyApi.NotifyAsync(message, userId);
        }

      
        [Route("status")]
        [HttpGet]
        public async Task StatusAsync()
        {
            await _lineNotifyApi.StatusAsync();
        }

       
        [Route("revoke")]
        [HttpPost]
        public async Task RevokeAsync()
        {
            await _lineNotifyApi.RevokeAsync();
        }




    }
}
