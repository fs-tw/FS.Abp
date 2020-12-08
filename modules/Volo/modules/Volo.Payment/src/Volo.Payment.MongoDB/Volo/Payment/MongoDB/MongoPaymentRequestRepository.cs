using System;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    public class MongoPaymentRequestRepository : MongoDbRepository<IPaymentMongoDbContext, PaymentRequest, Guid>, IPaymentRequestRepository
    {
        public MongoPaymentRequestRepository(IMongoDbContextProvider<IPaymentMongoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }
    }
}
