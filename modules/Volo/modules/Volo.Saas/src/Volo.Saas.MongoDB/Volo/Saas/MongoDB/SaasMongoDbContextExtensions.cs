using System;
using Volo.Abp;
using Volo.Abp.MongoDB;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.MongoDB
{
    public static class SaasMongoDbContextExtensions
    {
        public static void ConfigureSaas(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new SaasMongoModelBuilderConfigurationOptions(
                SaasDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);

            builder.Entity<Tenant>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "Tenants";
            });

            builder.Entity<Edition>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "Editions";
            });
        }
    }
}