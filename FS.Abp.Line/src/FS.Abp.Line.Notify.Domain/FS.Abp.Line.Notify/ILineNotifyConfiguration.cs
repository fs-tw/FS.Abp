using System;
using System.Threading.Tasks;

namespace FS.Abp.Line.Notify
{
    public interface ILineNotifyConfiguration
    {
        Task<string> GetClientIdAsync();
        Task<string> GetClientSecretAsync();
        Task<string> GetTokenAsync();
        Task<string> GetTokenByUserAsync(Guid userId);
        Task SetTokenAsync(string token);
        Task SetTokenByUserAsync(System.Guid userId, string token);
    }
}