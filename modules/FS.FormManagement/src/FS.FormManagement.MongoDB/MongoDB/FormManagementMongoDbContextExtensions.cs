using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.FormManagement.MongoDB
{
    public static class FormManagementMongoDbContextExtensions
    {
        public static void ConfigureFormManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new FormManagementMongoModelBuilderConfigurationOptions(
                FormManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}