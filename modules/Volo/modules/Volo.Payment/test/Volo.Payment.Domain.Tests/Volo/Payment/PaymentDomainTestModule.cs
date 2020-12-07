using Volo.Payment.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Payment.TwoCheckout;

namespace Volo.Payment
{
    [DependsOn(
        typeof(PaymentEntityFrameworkCoreTestModule),
        typeof(AbpPaymentTwoCheckoutDomainModule)
        )]
    public class PaymentDomainTestModule : AbpModule
    {
        
    }
}
