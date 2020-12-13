using System;
using Shouldly;
using Volo.Abp.Guids;
using Volo.Payment.Requests;
using Xunit;

namespace Volo.Payment
{
    public class PaymentRequest_Tests : PaymentTestBase<AbpPaymentDomainModule>
    {
        private readonly IGuidGenerator _generator;

        public PaymentRequest_Tests()
        {
            _generator = GetRequiredService<IGuidGenerator>();
        }

        // Complete
        // Failed
        [Fact]
        public void AddProduct()
        {
            PaymentRequest paymentRequest = new PaymentRequest(_generator.Create());
            paymentRequest.AddProduct("0001", "Test product", 10, 5, 50);

            paymentRequest.Products.Count.ShouldBe(1);
        }

        [Fact]
        public void Complete_Succeed()
        {
            PaymentRequest paymentRequest = new PaymentRequest(_generator.Create());
            paymentRequest.AddProduct("0001", "Test product", 10, 5, 50);

            paymentRequest.Complete(false);
            paymentRequest.State.ShouldBe(PaymentRequestState.Completed);
        }

        [Fact]
        public void Complete_Failed()
        {
            PaymentRequest paymentRequest = new PaymentRequest(_generator.Create());
            paymentRequest.AddProduct("0001", "Test product", 10, 5, 50);

            paymentRequest.Failed("Unknown Gateway");

            Assert.Throws<ApplicationException>(() => paymentRequest.Complete(false));
        }

        public void Failed_Succeed()
        {
            PaymentRequest paymentRequest = new PaymentRequest(_generator.Create());
            paymentRequest.AddProduct("0001", "Test product", 10, 5, 50);

            paymentRequest.Failed("Unknown Gateway");

            paymentRequest.State.ShouldBe(PaymentRequestState.Failed);
            paymentRequest.FailReason.ShouldBe("Unknown Gateway");
        }

        [Fact]
        public void Failed_Failed()
        {
            PaymentRequest paymentRequest = new PaymentRequest(_generator.Create());
            paymentRequest.AddProduct("0001", "Test product", 10, 5, 50);

            paymentRequest.Complete(false);

            Assert.Throws<ApplicationException>(() => paymentRequest.Failed());
        }
    }
}
