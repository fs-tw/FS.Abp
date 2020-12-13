using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    [ConnectionStringName("Payment")]
    public interface IPaymentMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */

        IMongoCollection<PaymentRequest> PaymentRequests { get; }
    }
}
