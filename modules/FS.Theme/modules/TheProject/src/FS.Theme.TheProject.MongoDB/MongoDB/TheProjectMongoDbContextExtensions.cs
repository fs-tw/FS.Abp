using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Theme.TheProject.MongoDB
{
    public static class TheProjectMongoDbContextExtensions
    {
        public static void ConfigureTheProject(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new TheProjectMongoModelBuilderConfigurationOptions(
                TheProjectDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}