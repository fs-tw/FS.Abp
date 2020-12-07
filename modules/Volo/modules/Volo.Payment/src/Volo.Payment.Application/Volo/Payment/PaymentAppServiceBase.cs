using Volo.Abp.Application.Services;
using Volo.Payment.Localization;

namespace Volo.Payment
{
    public abstract class PaymentAppServiceBase : ApplicationService
    {
        protected PaymentAppServiceBase()
        {
            ObjectMapperContext = typeof(AbpPaymentApplicationModule);
            LocalizationResource = typeof(PaymentResource);
        }
    }
}