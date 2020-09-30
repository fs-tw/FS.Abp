using System.Threading.Tasks;

namespace FS.Cms.Files
{
    public interface IFileAppService
    {
        Task DeleteAsync(string name);
        Task<byte[]> GetBytesAsync(string name);
        Task SaveBytesAsync(string name, byte[] bytes);
        Task SaveBytesAsync(string name, string base64);
        Task<string> GetBase64Async(string name);
    }
}