using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Metadata.MongoDB
{
    public static class MetadataMongoDbContextExtensions
    {
        public static void ConfigureMetadata(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new MetadataMongoModelBuilderConfigurationOptions(
                MetadataDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}