using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.MongoDB
{
    [ConnectionStringName(FileManagementDbProperties.ConnectionStringName)]
    public class FileManagementMongoDbContext : AbpMongoDbContext, IFileManagementMongoDbContext
    {
        public IMongoCollection<DirectoryDescriptor> DirectoryDescriptors => Collection<DirectoryDescriptor>();
        
        public IMongoCollection<FileDescriptor> FileDescriptors => Collection<FileDescriptor>();
        
        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureFileManagement();
        }
    }
}