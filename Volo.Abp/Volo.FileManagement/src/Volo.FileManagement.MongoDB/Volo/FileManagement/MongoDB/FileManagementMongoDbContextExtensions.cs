using System;
using Volo.Abp;
using Volo.Abp.MongoDB;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.MongoDB
{
    public static class FileManagementMongoDbContextExtensions
    {
        public static void ConfigureFileManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FileManagementMongoModelBuilderConfigurationOptions(
                FileManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
            
            builder.Entity<DirectoryDescriptor>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "DirectoryDescriptors";
            });
            
            builder.Entity<FileDescriptor>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "FileDescriptors";
            });
        }
    }
}