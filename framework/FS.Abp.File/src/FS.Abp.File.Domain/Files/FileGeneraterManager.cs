
using FS.Abp.File.Tool;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.VirtualFileSystem;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace FS.Abp.Files
{
    public class FileGeneraterManager : DomainService, IFileGeneraterManager
    {

        private readonly IFileManager fileManager;

        public FileGeneraterManager(
            IFileManager fileManager
            )
        {
            this.fileManager = fileManager;
        }

        public async Task<FileDescriptor> CreateFile(Stream stream, Guid directoryId, string fileName, Guid? tenantId = null)
        {
            var extension = Path.GetExtension(fileName);
            string contentType = FileExtensionContentTypeUtils.GetMimeType(extension);
            var memoryStream = new MemoryStream();
            stream.CopyTo(memoryStream);
            var fileDescriptor = await fileManager.CreateAsync(fileName, contentType, memoryStream.ToArray(), directoryId, tenantId);
            return fileDescriptor;
        }

        public async Task<FileDescriptor> CreateFileFromBase64(string input, Guid directoryId, string fileName, Guid? tenantId = null)
        {
            var memoryStream = new MemoryStream();
            string contentType = "";
            var temp = input.Split(",");
            var base64 = temp.Last();
            contentType = temp.First().Replace("data:", "").Replace(";base64", "");
            var bytes = Convert.FromBase64String(base64);
            memoryStream.Write(bytes, 0, bytes.Length);
            var fileDescriptor = await fileManager.CreateAsync(fileName + getFileExtension(base64), contentType, memoryStream.ToArray(), directoryId, tenantId, overrideExisting: true);
            return fileDescriptor;
        }

        private string getFileExtension(string base64String)
        {
            var data = base64String.Substring(0, 5);

            switch (data.ToUpper())
            {
                case "IVBOR":
                    return ".png";
                case "/9J/4":
                    return ".jpg";
                case "AAAAF":
                    return ".mp4";
                case "JVBER":
                    return ".pdf";
                case "AAABA":
                    return ".ico";
                case "UMFYI":
                    return ".rar";
                case "E1XYD":
                    return ".rtf";
                case "U1PKC":
                    return ".txt";
                case "MQOWM":
                case "77U/M":
                    return ".srt";
                default:
                    return string.Empty;
            }
        }


    }
}
