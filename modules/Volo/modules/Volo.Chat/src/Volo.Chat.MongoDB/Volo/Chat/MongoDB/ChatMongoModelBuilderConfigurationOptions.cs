using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace Volo.Chat.MongoDB
{
    public class ChatMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public ChatMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}