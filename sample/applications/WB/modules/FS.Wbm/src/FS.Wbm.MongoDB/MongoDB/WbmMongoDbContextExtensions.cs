using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Wbm.MongoDB
{
    public static class WbmMongoDbContextExtensions
    {
        public static void ConfigureWbm(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new WbmMongoModelBuilderConfigurationOptions(
                WbmDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}