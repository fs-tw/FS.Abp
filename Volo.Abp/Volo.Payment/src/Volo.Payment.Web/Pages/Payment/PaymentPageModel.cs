using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Payment.Pages.Payment
{
    public abstract class PaymentPageModel : AbpPageModel
    {
        public PaymentPageModel()
        {
            ObjectMapperContext = typeof(AbpPaymentWebModule);
        }
    }
}