using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.EntityFrameworkCore
{
    [ConnectionStringName(FileManagementDbProperties.ConnectionStringName)]
    public class FileManagementDbContext : AbpDbContext<FileManagementDbContext>, IFileManagementDbContext
    {
        public DbSet<DirectoryDescriptor> DirectoryDescriptions { get; set; }
        
        public DbSet<FileDescriptor> FileDescriptions { get; set; }

        public FileManagementDbContext(DbContextOptions<FileManagementDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureFileManagement();
        }
    }
}