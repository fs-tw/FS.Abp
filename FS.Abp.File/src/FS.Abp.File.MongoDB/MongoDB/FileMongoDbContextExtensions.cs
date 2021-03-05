using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.File.MongoDB
{
    public static class FileMongoDbContextExtensions
    {
        public static void ConfigureFile(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FileMongoModelBuilderConfigurationOptions(
                FileDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}