using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.Authentication.MongoDB
{
    public class AuthenticationMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public AuthenticationMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}