using System.Threading.Tasks;

namespace FS.LineNotify
{
    public interface ILineNotifyAppService
    {
        //Task<string> TokenAsync(string serviceDefinition, string code);
        Task<string> AuthorizeUrl(string serviceDefinition,string channel, string clientRedirectUrl);
        Task NotifyAsyn(string message, string channel);
    }
}