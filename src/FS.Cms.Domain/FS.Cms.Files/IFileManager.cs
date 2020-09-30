using System.Threading.Tasks;
using Volo.Abp.BlobStoring.Database;

namespace FS.Cms.Files
{
    public interface IFileManager
    {
        Task DeleteAsync(string name);
        Task<string> GetBase64Async(string name);
        Task<byte[]> GetBytesAsync(string name);
        DatabaseBlob GetContentByName(string name);
        bool IsBase64String(string base64);
        Task SaveBytesAsync(string name, byte[] bytes);
        Task SaveBytesAsync(string name, string base64);
    }
}