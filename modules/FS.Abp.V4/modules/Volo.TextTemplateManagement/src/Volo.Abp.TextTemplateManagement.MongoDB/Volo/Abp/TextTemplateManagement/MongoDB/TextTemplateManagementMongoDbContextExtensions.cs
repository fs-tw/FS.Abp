using System;
using Volo.Abp;
using Volo.Abp.MongoDB;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.MongoDB
{
    public static class TextTemplateManagementMongoDbContextExtensions
    {
        public static void ConfigureTextTemplateManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new TextTemplateManagementMongoModelBuilderConfigurationOptions(
                TextTemplateManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);

            builder.Entity<TextTemplateContent>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "TextTemplates";
            });
        }
    }
}