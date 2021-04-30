using FS.Abp.File.Utils;
using System;
using System.Buffers.Text;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Content;
using Volo.Abp.Domain.Services;
using Volo.FileManagement.Files;

namespace FS.Abp.Files
{
    public class Base64Parser
    {

        private string _base64String;
        private string[] _base64Format;
        public Base64Parser(string base64String)
        {
            _base64String = base64String;
            _base64Format = base64String.Split(",");
        }

        public string FileExtension
        {
            get
            {
                var data = _base64String.Substring(0, 5);

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

        public string ContentType
        {
            get
            {
                return _base64Format.First().Replace("data:", "").Replace(";base64", "");
            }
        }
        public byte[] Data
        {
            get
            {
                return Convert.FromBase64String(_base64Format.Last());
            }
        }

    }
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
            var remoteStreamContent = new RemoteStreamContent(stream) { ContentType = FileExtensionContentTypeUtils.GetMimeType(extension) };
            var fileDescriptor = await fileManager.CreateAsync(fileName, remoteStreamContent.ContentType, remoteStreamContent, directoryId, tenantId);
            return fileDescriptor;
        }

        public async Task<FileDescriptor> CreateFile(string base64input, Guid directoryId, string fileName, Guid? tenantId = null)
        {
            var base64 = new Base64Parser(base64input);

            var remoteStreamContent = new RemoteStreamContent(new MemoryStream(base64.Data)) { ContentType = base64.ContentType };

            var fileDescriptor = await fileManager.CreateAsync(fileName + base64.FileExtension, base64.ContentType, remoteStreamContent, directoryId, tenantId, overrideExisting: true);
            return fileDescriptor;
        }
    }
}