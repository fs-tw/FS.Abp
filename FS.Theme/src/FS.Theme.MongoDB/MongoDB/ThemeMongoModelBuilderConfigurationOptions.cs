using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Theme.MongoDB
{
    public class ThemeMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public ThemeMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}