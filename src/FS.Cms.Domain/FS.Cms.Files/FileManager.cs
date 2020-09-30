using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;

namespace FS.Cms.Files
{
    public class FileManager : DomainService, IFileManager
    {
        private readonly IRepository<DatabaseBlob, Guid> _databaseBlobsRepository;
        private readonly IBlobContainer _blobContainer;

        public FileManager(
        IRepository<DatabaseBlob, Guid> databaseBlobsRepository,
        IBlobContainer blobContainer
            )
        {
            this._databaseBlobsRepository = databaseBlobsRepository;
            this._blobContainer = blobContainer;
        }


        public DatabaseBlob GetContentByName(string name)
        {
            var entity = this._databaseBlobsRepository.Where(x => x.Name.Equals(name)).FirstOrDefault();
            return entity;
        }


        public async Task SaveBytesAsync(string name, string base64)
        {
            var findCommaIndex = base64.LastIndexOf(',');
            var text = base64;
            if (findCommaIndex > 0) text = base64.Substring(base64.LastIndexOf(',') + 1);
            var bytes = Convert.FromBase64String(text);
            await this.SaveBytesAsync(name, bytes).ConfigureAwait(false);
        }

        public async Task<string> GetBase64Async(string name)
        {
            var result = this.GetContentByName(name);
            string base64 = Convert.ToBase64String(result.Content);
            return base64;
        }

        public async Task SaveBytesAsync(string name, byte[] bytes)
        {
            await _blobContainer.SaveAsync(name, bytes, true).ConfigureAwait(false);
        }

        public async Task<byte[]> GetBytesAsync(string name)
        {
            var data = await _blobContainer.GetAllBytesOrNullAsync(name).ConfigureAwait(false);
            return data;
        }

        public Task DeleteAsync(string name)
        {
            return _blobContainer.DeleteAsync(name);
        }


        public bool IsBase64String(string base64)
        {
            base64 = base64.Trim();
            return (base64.Length % 4 == 0) && Regex.IsMatch(base64, @"^[a-zA-Z0-9\+/]*={0,3}$", RegexOptions.None);
        }
    }
}
