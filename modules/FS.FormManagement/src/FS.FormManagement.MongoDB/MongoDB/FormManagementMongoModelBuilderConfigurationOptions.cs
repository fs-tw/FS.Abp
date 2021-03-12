using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.FormManagement.MongoDB
{
    public class FormManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public FormManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}