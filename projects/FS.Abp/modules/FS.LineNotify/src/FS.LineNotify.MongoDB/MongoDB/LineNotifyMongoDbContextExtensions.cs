using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.LineNotify.MongoDB
{
    public static class LineNotifyMongoDbContextExtensions
    {
        public static void ConfigureLineNotify(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new LineNotifyMongoModelBuilderConfigurationOptions(
                LineNotifyDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}