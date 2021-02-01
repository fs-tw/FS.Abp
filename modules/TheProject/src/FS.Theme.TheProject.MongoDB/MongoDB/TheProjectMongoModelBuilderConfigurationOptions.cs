using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Theme.TheProject.MongoDB
{
    public class TheProjectMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public TheProjectMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}