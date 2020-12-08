using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe.Checkout;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Payment.Requests;

namespace Volo.Payment.Stripe.Pages.Payment.Stripe
{
    public class PrePaymentModel : AbpPageModel
    {
        [BindProperty] public Guid PaymentRequestId { get; set; }

        public string PublishableKey { get; set; }

        public string SessionId { get; set; }

        protected PaymentRequestWithDetailsDto PaymentRequest { get; set; }

        protected PaymentWebOptions PaymentWebOptions { get; }

        protected StripeOptions StripeOptions { get; }

        protected IPaymentRequestAppService PaymentRequestAppService { get; }

        private readonly IPurchaseParameterListGenerator _purchaseParameterListGenerator;

        public PrePaymentModel(
            IOptions<PaymentWebOptions> paymentWebOptions,
            IOptions<StripeOptions> stripeOptions,
            IPaymentRequestAppService paymentRequestAppService,
            IPurchaseParameterListGenerator purchaseParameterListGenerator)
        {
            PaymentWebOptions = paymentWebOptions.Value;
            StripeOptions = stripeOptions.Value;
            PaymentRequestAppService = paymentRequestAppService;
            _purchaseParameterListGenerator = purchaseParameterListGenerator;
        }

        public virtual ActionResult OnGet()
        {
            return BadRequest();
        }

        public virtual async Task OnPostAsync()
        {
            PaymentRequest = await PaymentRequestAppService.GetAsync(PaymentRequestId);
            var purchaseParameters = _purchaseParameterListGenerator.GetExtraParameterConfiguration(PaymentRequest);

            var options = new SessionCreateOptions
            {
                Locale = purchaseParameters.Locale,
                PaymentMethodTypes = purchaseParameters.PaymentMethodTypes,
                LineItems = PaymentRequest.Products.Select(product => new SessionLineItemOptions
                {
                    Quantity = product.Count,
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmountDecimal = Convert.ToDecimal(product.UnitPrice) * 100,
                        Currency = purchaseParameters.Currency,
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = product.Name
                        }
                    }
                }).ToList(),

                Mode = "payment",

                SuccessUrl = PaymentWebOptions.RootUrl.RemovePostFix("/") + StripeConsts.PostPaymentUrl +
                             "?SessionId={CHECKOUT_SESSION_ID}",
                CancelUrl = PaymentWebOptions.RootUrl,

                Metadata = new Dictionary<string, string>
                {
                    {"PaymentRequestId", PaymentRequestId.ToString()}
                }
            };

            var sessionService = new SessionService();
            var session = await sessionService.CreateAsync(options);

            PublishableKey = StripeOptions.PublishableKey;
            SessionId = session.Id;
        }
    }
}
