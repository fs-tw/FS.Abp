using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.Settings.MongoDB
{
    public class SettingsMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public SettingsMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}