using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Settings.MongoDB
{
    public static class SettingsMongoDbContextExtensions
    {
        public static void ConfigureSettings(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new SettingsMongoModelBuilderConfigurationOptions(
                SettingsDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}