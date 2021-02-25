using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Wbm.MongoDB
{
    public class WbmMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public WbmMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}