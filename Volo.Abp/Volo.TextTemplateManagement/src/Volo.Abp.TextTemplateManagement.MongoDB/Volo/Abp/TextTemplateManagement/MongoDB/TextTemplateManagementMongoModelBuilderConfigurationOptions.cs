using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace Volo.Abp.TextTemplateManagement.MongoDB
{
    public class TextTemplateManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public TextTemplateManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}