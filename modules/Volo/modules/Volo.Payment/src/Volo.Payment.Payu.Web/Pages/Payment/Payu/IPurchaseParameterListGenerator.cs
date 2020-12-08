using System.Collections.Generic;
using Volo.Payment.Requests;

namespace Volo.Payment.Payu.Pages.Payment.Payu
{
    public interface IPurchaseParameterListGenerator
    {
        List<PurchaseParameter> Generate(PaymentRequestWithDetailsDto paymentRequest);

        PayuPaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(PaymentRequestWithDetailsDto paymentRequest);
    }
}