using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Stripe.Checkout;
using Volo.Payment.Requests;

namespace Volo.Payment.Stripe.Pages.Payment.Stripe
{
    public class PostPaymentModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string SessionId { get; set; }

        protected IPaymentRequestAppService PaymentRequestAppService { get; }

        public ILogger<PostPaymentModel> Logger { get; set; }

        private readonly IOptions<PaymentWebOptions> _paymentWebOptions;
        private readonly IPurchaseParameterListGenerator _purchaseParameterListGenerator;
        
        public PostPaymentModel(
            IPaymentRequestAppService paymentRequestAppService,
            IOptions<PaymentWebOptions> paymentWebOptions,
            IPurchaseParameterListGenerator purchaseParameterListGenerator)
        {
            PaymentRequestAppService = paymentRequestAppService;
            _paymentWebOptions = paymentWebOptions;
            _purchaseParameterListGenerator = purchaseParameterListGenerator;
            Logger = NullLogger<PostPaymentModel>.Instance;
        }

        public virtual async Task<IActionResult> OnGetAsync()
        {
            if (SessionId.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }

            var sessionService = new SessionService();
            var session = await sessionService.GetAsync(SessionId);

            var paymentRequestId = Guid.Parse(session.Metadata["PaymentRequestId"]);

            Logger.LogInformation("Stripe session object: " + session.ToJson());

            await PaymentRequestAppService.CompleteAsync(
                new CompletePaymentRequestDto
                {
                    GateWay = StripeConsts.GatewayName,
                    Id = paymentRequestId,
                    Properties = new Dictionary<string, string>
                    {
                        {"SessionId", session.Id},
                    }
                });

            if (!_paymentWebOptions.Value.CallbackUrl.IsNullOrWhiteSpace())
            {
                var callbackUrl = _paymentWebOptions.Value.CallbackUrl + "?paymentRequestId=" + paymentRequestId;
                var paymentRequest = await PaymentRequestAppService.GetAsync(paymentRequestId);
                var extraPaymentParameters = _purchaseParameterListGenerator.GetExtraParameterConfiguration(paymentRequest);

                if (!extraPaymentParameters.AdditionalCallbackParameters.IsNullOrEmpty())
                {
                    callbackUrl += "&" + extraPaymentParameters.AdditionalCallbackParameters;
                }

                Response.Redirect(callbackUrl);
            }

            return Page();
        }


        public virtual IActionResult OnPost()
        {
            return BadRequest();
        }
    }
}
