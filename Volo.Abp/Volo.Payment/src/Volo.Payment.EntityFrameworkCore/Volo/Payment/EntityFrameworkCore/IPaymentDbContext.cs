using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Payment.Requests;

namespace Volo.Payment.EntityFrameworkCore
{
    [ConnectionStringName("Payment")]
    public interface IPaymentDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */

        DbSet<PaymentRequest> PaymentRequests { get; }
    }
}