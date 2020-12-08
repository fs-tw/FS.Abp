using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace Volo.Chat.MongoDB
{
    public static class ChatMongoDbContextExtensions
    {
        public static void ConfigureChat(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new ChatMongoModelBuilderConfigurationOptions(
                ChatDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}