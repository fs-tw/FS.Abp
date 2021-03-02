using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Authentication.MongoDB
{
    public static class AuthenticationMongoDbContextExtensions
    {
        public static void ConfigureAuthentication(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new AuthenticationMongoModelBuilderConfigurationOptions(
                AuthenticationDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}