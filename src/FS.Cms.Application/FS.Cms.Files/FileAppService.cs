using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.BlobStoring;

namespace FS.Cms.Files
{
    [RemoteService(IsEnabled = false)]
    public class FileAppService : CmsAppService, IFileAppService
    {        
        private readonly IFileManager _fileManager;

        public FileAppService(     
            IFileManager fileManager
            
            )
        {
         
            this._fileManager = fileManager;
        }

        public async Task SaveBytesAsync(string name, string base64)
        {
            await this._fileManager.SaveBytesAsync(name, base64);
        }

        public async Task<string> GetBase64Async(string name) 
        {
            return await this._fileManager.GetBase64Async(name);            
        }

        public async Task SaveBytesAsync(string name, byte[] bytes)
        {
            await this._fileManager.SaveBytesAsync(name, bytes);           
        }

        public async Task<byte[]> GetBytesAsync(string name)
        {
            var data  = await this._fileManager.GetBytesAsync(name);
            
            return data;
        }

        public Task DeleteAsync(string name)
        {
            return this._fileManager.DeleteAsync(name);
        }
    }
}
