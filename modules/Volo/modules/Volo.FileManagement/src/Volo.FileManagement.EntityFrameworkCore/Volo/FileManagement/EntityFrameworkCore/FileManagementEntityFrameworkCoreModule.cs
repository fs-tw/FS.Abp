using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(FileManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class FileManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<FileManagementDbContext>(options =>
            {
                options.AddRepository<DirectoryDescriptor, EfCoreDirectoryDescriptorRepository>();
                
                options.AddRepository<FileDescriptor, EfCoreFileDescriptorRepository>();
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<FileManagementEntityFrameworkCoreModule>(context);
        }
    }
}