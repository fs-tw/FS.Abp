using System;
using System.IO;
using System.Threading.Tasks;
using Volo.FileManagement.Files;

namespace FS.Abp.Files
{
    public interface IFileGeneraterManager
    {
        Task<FileDescriptor> CreateFile(Stream stream, Guid directoryId, string fileName, Guid? tenantId = null);

        Task<FileDescriptor> CreateFile(string base64Input, Guid directoryId, string fileName, Guid? tenantId = null);
    }
}