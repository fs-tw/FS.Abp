using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.MongoDB
{
    [ConnectionStringName(FileManagementDbProperties.ConnectionStringName)]
    public interface IFileManagementMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<DirectoryDescriptor> DirectoryDescriptors { get; }
        
        IMongoCollection<FileDescriptor> FileDescriptors { get; }
    }
}
