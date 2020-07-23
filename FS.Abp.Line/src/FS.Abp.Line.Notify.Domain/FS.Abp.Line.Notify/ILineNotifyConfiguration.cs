using System.Threading.Tasks;

namespace FS.Abp.Line.Notify
{
    public interface ILineNotifyConfiguration
    {
        Task<string> GetClientIdAsync();
        Task<string> GetClientSecretAsync();
        Task<string> GetTokenAsync();
        Task SetTokenAsync(string token);
    }
}