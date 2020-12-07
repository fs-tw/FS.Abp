using System;
using Volo.Abp;
using Volo.Abp.MongoDB;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    public static class PaymentMongoDbContextExtensions
    {
        public static void ConfigurePayment(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new PaymentMongoModelBuilderConfigurationOptions(
                PaymentDbProperties.DefaultDbTablePrefix
            );

            optionsAction?.Invoke(options);

            builder.Entity<PaymentRequest>(b =>
            {
                b.CollectionName = options.CollectionPrefix + "PaymentRequests";
            });
        }
    }
}