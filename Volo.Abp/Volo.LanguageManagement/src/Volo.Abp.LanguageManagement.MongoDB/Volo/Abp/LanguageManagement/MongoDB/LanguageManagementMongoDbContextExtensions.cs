using System;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    public static class LanguageManagementMongoDbContextExtensions
    {
        public static void ConfigureLanguageManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new LanguageManagementMongoModelBuilderConfigurationOptions(
                LanguageManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);

            builder.Entity<Language>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "Languages";
            });

            builder.Entity<LanguageText>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "LanguageTexts";
            });
        }
    }
}