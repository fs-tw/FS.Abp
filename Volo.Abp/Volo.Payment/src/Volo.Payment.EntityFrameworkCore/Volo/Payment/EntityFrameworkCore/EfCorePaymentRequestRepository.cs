using System;
using System.Linq;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Payment.Requests;

namespace Volo.Payment.EntityFrameworkCore
{
    public class EfCorePaymentRequestRepository : EfCoreRepository<IPaymentDbContext, PaymentRequest, Guid>, IPaymentRequestRepository
    {
        public EfCorePaymentRequestRepository(IDbContextProvider<IPaymentDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public override IQueryable<PaymentRequest> WithDetails()
        {
            return GetQueryable().IncludeDetails();
        }
    }
}
