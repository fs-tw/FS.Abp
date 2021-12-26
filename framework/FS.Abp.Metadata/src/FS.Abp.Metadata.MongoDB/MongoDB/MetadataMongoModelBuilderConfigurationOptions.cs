using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.Metadata.MongoDB
{
    public class MetadataMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public MetadataMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}