using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.Core.MongoDB
{
    public class CoreMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public CoreMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}