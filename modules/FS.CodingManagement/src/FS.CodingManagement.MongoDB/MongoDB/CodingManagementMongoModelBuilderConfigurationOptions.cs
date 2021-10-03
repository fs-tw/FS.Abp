using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.CodingManagement.MongoDB
{
    public class CodingManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public CodingManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}