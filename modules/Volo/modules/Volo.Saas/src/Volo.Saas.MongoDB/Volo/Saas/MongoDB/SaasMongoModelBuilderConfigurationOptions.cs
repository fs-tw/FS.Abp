using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace Volo.Saas.MongoDB
{
    public class SaasMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public SaasMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {

        }
    }
}