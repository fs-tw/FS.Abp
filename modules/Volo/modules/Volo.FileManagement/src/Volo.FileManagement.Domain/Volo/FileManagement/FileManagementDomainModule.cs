using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AutoMapper;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.Modularity;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement
{
    [DependsOn(
        typeof(AbpBlobStoringModule),
        typeof(FileManagementDomainSharedModule),
        typeof(AbpAutoMapperModule)
    )]
    public class FileManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<FileManagementDomainModule>();
            
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<FileManagementDomainMappingProfile>(validate: true);
            });
            
            Configure<AbpDistributedEntityEventOptions>(options =>
            {
                options.EtoMappings.Add<FileDescriptor, FileDescriptorEto>(typeof(FileManagementDomainModule));
                options.EtoMappings.Add<DirectoryDescriptor, DirectoryDescriptorEto>(typeof(FileManagementDomainModule));
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<FileManagementDomainModule>(context);
        }
    }
}