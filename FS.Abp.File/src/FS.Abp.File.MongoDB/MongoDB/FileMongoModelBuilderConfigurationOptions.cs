using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.File.MongoDB
{
    public class FileMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public FileMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}