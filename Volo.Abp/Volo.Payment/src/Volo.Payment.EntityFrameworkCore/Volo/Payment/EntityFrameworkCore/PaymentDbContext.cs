using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Payment.Requests;

namespace Volo.Payment.EntityFrameworkCore
{
    [ConnectionStringName("AbpPayment")]
    public class PaymentDbContext : AbpDbContext<PaymentDbContext>, IPaymentDbContext
    {
        public DbSet<PaymentRequest> PaymentRequests { get; set; }

        public PaymentDbContext(DbContextOptions<PaymentDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigurePayment();
        }
    }
}