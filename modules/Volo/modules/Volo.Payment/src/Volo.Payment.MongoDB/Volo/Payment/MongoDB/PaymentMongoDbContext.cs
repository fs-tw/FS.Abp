using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    [ConnectionStringName("Payment")]
    public class PaymentMongoDbContext : AbpMongoDbContext, IPaymentMongoDbContext
    {
        public static string CollectionPrefix { get; set; } = PaymentDbProperties.DefaultDbTablePrefix;

        public IMongoCollection<PaymentRequest> PaymentRequests => Collection<PaymentRequest>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigurePayment(options =>
            {
                options.CollectionPrefix = CollectionPrefix;
            });
        }
    }
}