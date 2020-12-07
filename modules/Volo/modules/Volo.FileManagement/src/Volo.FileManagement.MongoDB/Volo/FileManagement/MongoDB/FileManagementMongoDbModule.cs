using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.MongoDB
{
    [DependsOn(
        typeof(FileManagementDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class FileManagementMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<FileManagementMongoDbContext>(options =>
            {
                options.AddRepository<DirectoryDescriptor, MongoDbDirectoryDescriptorRepository>();
                
                options.AddRepository<FileDescriptor, MongoDbFileDescriptorRepository>();
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<FileManagementMongoDbModule>(context);
        }
    }
}
