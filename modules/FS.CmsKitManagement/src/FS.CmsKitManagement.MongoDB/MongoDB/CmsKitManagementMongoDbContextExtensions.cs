using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.CmsKitManagement.MongoDB
{
    public static class CmsKitManagementMongoDbContextExtensions
    {
        public static void ConfigureCmsKitManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new CmsKitManagementMongoModelBuilderConfigurationOptions(
                CmsKitManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}