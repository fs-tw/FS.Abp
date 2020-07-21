using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Core.MongoDB
{
    public static class CoreMongoDbContextExtensions
    {
        public static void ConfigureCore(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new CoreMongoModelBuilderConfigurationOptions(
                CoreDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}