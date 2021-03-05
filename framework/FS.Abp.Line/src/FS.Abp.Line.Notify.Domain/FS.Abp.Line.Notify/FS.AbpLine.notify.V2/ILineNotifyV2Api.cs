using System;
using System.Threading.Tasks;
using FS.Abp.Line.Notify.Models;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Line.Notify
{
    public interface ILineNotifyV2Api : ITransientDependency
    {
        string AuthorizeUrl();
        Task NotifyAsync(string message,Guid userId);
        Task RevokeAsync();
        Task<StatusResponse> StatusAsync();
        Task<bool> TokenAsync(string code, Guid userId);
    }
}