using System;
using Volo.Abp.Domain.Repositories;

namespace Volo.Payment.Requests
{
    public interface IPaymentRequestRepository : IBasicRepository<PaymentRequest, Guid>
    {
        
    }
}
