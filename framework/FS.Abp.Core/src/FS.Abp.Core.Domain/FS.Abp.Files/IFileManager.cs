using System.Threading.Tasks;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.Domain.Services;

namespace FS.Abp.Files
{
    /// <summary>
    /// name 包含 資料夾/檔案名稱，AbpBlobStoringOptions預設為存資料庫
    /// </summary>
    public interface IFileManager
    {
        
        Task DeleteAsync(string name);
        Task<string> GetBase64Async(string name);
        Task<byte[]> GetBytesAsync(string name);
        //DatabaseBlob GetContentByName(string name);
        //bool IsBase64String(string base64);
        Task SaveBytesAsync(string name, byte[] bytes);
        Task<string> SaveBytesAsync(string name, string base64);
        string GetFileApiUrl(string fileName);
    }
}