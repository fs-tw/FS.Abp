using Volo.Payment.Requests;

namespace Volo.Payment.TwoCheckout.Pages.Payment.TwoCheckout
{
    public interface IPurchaseUrlGenerator
    {
        string GetUrl(PaymentRequestWithDetailsDto paymentRequest);

        string GetCurrency(PaymentRequestWithDetailsDto paymentRequest);

        TwoCheckoutPaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(PaymentRequestWithDetailsDto paymentRequest);
    }
}