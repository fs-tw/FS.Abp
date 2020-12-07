using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.MongoDB
{
    public static class AbpMongoDbContextExtensions
    {
        public static void ConfigureAbp(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new AbpMongoModelBuilderConfigurationOptions(
                AbpDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}