using Volo.Payment.PayPal;
using Volo.Payment.Requests;

namespace Volo.Payment.Paypal.Pages.Payment.PayPal
{
    public interface IPurchaseParameterListGenerator
    {
        PayPalPaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(
            PaymentRequestWithDetailsDto paymentRequest);
    }
}
