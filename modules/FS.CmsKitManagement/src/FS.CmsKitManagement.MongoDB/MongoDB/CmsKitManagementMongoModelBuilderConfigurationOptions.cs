using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.CmsKitManagement.MongoDB
{
    public class CmsKitManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public CmsKitManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}