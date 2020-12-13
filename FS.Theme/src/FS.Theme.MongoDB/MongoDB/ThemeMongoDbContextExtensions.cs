using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Theme.MongoDB
{
    public static class ThemeMongoDbContextExtensions
    {
        public static void ConfigureTheme(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new ThemeMongoModelBuilderConfigurationOptions(
                ThemeDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}