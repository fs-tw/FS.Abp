using Microsoft.Extensions.DependencyInjection;
using System;
using Volo.Abp.BlobStoring;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.BlobStoring.FileSystem;
using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainSharedModule),
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule),
        //typeof(Volo.Abp.AuditLogging.AbpAuditLoggingDomainModule),
        typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule),
        typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule),
        typeof(Volo.Abp.BlobStoring.Database.BlobStoringDatabaseDomainModule),
        typeof(AbpBlobStoringFileSystemModule)
        
        )]
    public class CoreDomainModule : AbpModule
    {
  
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            
            string saveFilePath = configuration["FS.Abp.Core:FileStorage:SaveFilePath"];          
            Configure<AbpBlobStoringOptions>(options =>
            {
                options.Containers.ConfigureDefault(container =>
                {
                    if (saveFilePath.IsNullOrEmpty()) container.UseDatabase();
                    else 
                    {
                        container.UseFileSystem(fileSystem =>
                        {
                            fileSystem.BasePath = saveFilePath; 
                        });
                    }                    
                });              
            });           
        }

    }
}
