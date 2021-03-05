using FS.Abp.Line.Notify.Models;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Line.Notify
{
    public interface ILineNotifyApi : ITransientDependency
    {
        string AuthorizeUrl();
        Task NotifyAsync(string message);
        Task RevokeAsync();
        Task<StatusResponse> StatusAsync();
        Task TokenAsync(string code);
    }
}