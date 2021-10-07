using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.EntityTypes.MongoDB
{
    public static class EntityTypesMongoDbContextExtensions
    {
        public static void ConfigureEntityTypes(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new EntityTypesMongoModelBuilderConfigurationOptions(
                EntityTypesDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}