using FS.LineNotify.Models;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.LineNotify
{
    public interface ILineNotifyGateway : ITransientDependency
    {
        Task<string> AuthorizeUrl(string serviceDefinition, string channel, string clientRedirectUrl);
        Task NotifyAsync(string message, string channel);
        Task RevokeAsync(string channel);
        Task<StatusResponse> StatusAsync(string channel);
        Task<TokenResponse> TokenAsync(string no, string code);
    }
}