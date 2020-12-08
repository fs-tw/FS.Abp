using System;
using System.Collections.Generic;
using Shouldly;
using Volo.Payment.Requests;
using Xunit;

namespace Volo.Payment.TwoCheckout
{
    public class TwoCheckoutPaymentGateway_Tests : PaymentTestBase<AbpPaymentTwoCheckoutDomainModule>
    {
        private readonly TwoCheckoutPaymentGateway _twoCheckoutPaymentGateway;
        
        public TwoCheckoutPaymentGateway_Tests()
        {
            _twoCheckoutPaymentGateway = GetRequiredService<TwoCheckoutPaymentGateway>();
        }

        [Fact]
        public void TwoCheckoutPaymentGateway_IsValid_Test()
        {
            _twoCheckoutPaymentGateway.IsValid(new PaymentRequest(Guid.NewGuid()), new Dictionary<string, string>
            {
                {
                    "ctrl",
                    "53a8711791ab64c0fb2f1c6bc8adfa70"
                },
                {
                    "url",
                    "http://test.aspnetzero.com/Payment/TwoCheckout/PostPayment?paymentRequestId=f3a73263-4192-7c5a-5deb-39f34c072547&ctrl=53a8711791ab64c0fb2f1c6bc8adfa70"
                }
            }).ShouldBeTrue();
        }
    }
}
