using FS.Abp.Core.Files;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.EventBus.Local;

namespace FS.Abp.Files
{
    public class FileManager : DomainService, IFileManager
    {
        private readonly IRepository<DatabaseBlob, Guid> _databaseBlobsRepository;
        private readonly IBlobContainer _blobContainer;
        private readonly ILocalEventBus _localEventBus;

        public FileManager(
        IRepository<DatabaseBlob, Guid> databaseBlobsRepository,
        IBlobContainer blobContainer,
        ILocalEventBus localEventBus
            )
        {
            this._databaseBlobsRepository = databaseBlobsRepository;
            this._blobContainer = blobContainer;
            this._localEventBus = localEventBus;
        }

        public string GetFileApiUrl(string fileName) 
        {
            if (fileName.IsNullOrEmpty()) return "";
            if (fileName.StartsWith("http")) return fileName;
            string apiUrl = "api/theme-core/file";
            return $"/{apiUrl}/{fileName}";       
        }

        private DatabaseBlob GetContentByName(string name)
        {
            var entity = this._databaseBlobsRepository.Where(x => x.Name.Equals(name)).FirstOrDefault();
            return entity;
        }

        public async Task<string> GetBase64Async(string name)
        {
            var result = this.GetContentByName(name);
            string base64 = Convert.ToBase64String(result.Content);
            return base64;
        }

        public async Task<byte[]> GetBytesAsync(string name)
        {
            var data = await _blobContainer.GetAllBytesOrNullAsync(name).ConfigureAwait(false);
            return data;
        }

        public async Task<string> SaveBytesAsync(string name, string base64)
        {
            var checkExtension = Path.GetExtension(name);
            var findCommaIndex = base64.LastIndexOf(',');
            var text = base64;

            //移除 data:image/png;base64,
            if (findCommaIndex > 0) text = base64.Substring(base64.LastIndexOf(',') + 1);
            //name是否有副檔名
            if (checkExtension.IsNullOrEmpty()) name = name + "." + getFileExtension(text);
            //是否為base64格式
            if (!this.IsBase64String(text)) throw new Exception(name + "不是base64格式！！");

            var bytes = Convert.FromBase64String(text);
            await this.SaveBytesAsync(name, bytes).ConfigureAwait(false);
            return name.Replace("\\", "%5C"); ;
        }


        public async Task SaveBytesAsync(string name, byte[] bytes)
        {        
            await _blobContainer.SaveAsync(name, bytes, true).ConfigureAwait(false);
            await this._localEventBus.PublishAsync(new FileChangedEvent()
            {
                Name = name,
                IsDelete = false,
                FileSize = bytes.LongLength,
                FileSizeStr = bytesToString(bytes.LongLength)
            });
        }

        public async Task DeleteAsync(string name)
        {
            await _blobContainer.DeleteAsync(name);
            await this._localEventBus.PublishAsync(new FileChangedEvent()
            {
                Name = name.Replace("\\", "%5C"),
                IsDelete = true,
                FileSize = 0,
                FileSizeStr = ""
            });            
        }


        public bool IsBase64String(string base64)
        {
            if (base64.IsNullOrEmpty()) return false;
            base64 = base64.Trim();
            return (base64.Length % 4 == 0) && Regex.IsMatch(base64, @"^[a-zA-Z0-9\+/]*={0,3}$", RegexOptions.None);
        }


        private String bytesToString(long byteCount)
        {
            string[] suf = { "B", "KB", "MB", "GB", "TB", "PB", "EB" }; //Longs run out around EB
            if (byteCount == 0)
                return "0" + suf[0];
            long bytes = Math.Abs(byteCount);
            int place = Convert.ToInt32(Math.Floor(Math.Log(bytes, 1024)));
            double num = Math.Round(bytes / Math.Pow(1024, place), 1);
            return (Math.Sign(byteCount) * num).ToString() + suf[place];
        }

        private string getFileExtension(string base64String)
        {
            var data = base64String.Substring(0, 5);

            switch (data.ToUpper())
            {
                case "IVBOR":
                    return "png";
                case "/9J/4":
                    return "jpg";
                case "AAAAF":
                    return "mp4";
                case "JVBER":
                    return "pdf";
                case "AAABA":
                    return "ico";
                case "UMFYI":
                    return "rar";
                case "E1XYD":
                    return "rtf";
                case "U1PKC":
                    return "txt";
                case "MQOWM":
                case "77U/M":
                    return "srt";
                default:
                    return string.Empty;
            }
        }
    }



}
