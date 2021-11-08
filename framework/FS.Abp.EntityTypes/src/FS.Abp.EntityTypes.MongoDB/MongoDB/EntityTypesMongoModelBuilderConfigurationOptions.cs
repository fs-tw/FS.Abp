using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.EntityTypes.MongoDB
{
    public class EntityTypesMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public EntityTypesMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}