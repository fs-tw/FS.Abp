using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Line.Notify
{
    [Area("line")]
    [RemoteService(Name = "line")]
    [Route("api/line/notify")]
    public class LineNotifyController : AbpController, ILineNotifyController
    {
        private readonly ILineNotifyApi _lineNotifyApi;

        public LineNotifyController(ILineNotifyApi lineNotifyApi)
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
        [HttpPut]
        public async Task TokenAsync(string code)
        {
            await _lineNotifyApi.TokenAsync(code);
        }

        [Route("notify")]
        [HttpPost]
        public async Task NotifyAsync(string message)
        {
            await _lineNotifyApi.NotifyAsync(message);
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
