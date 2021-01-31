using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.LineNotify.MongoDB
{
    public class LineNotifyMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public LineNotifyMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}