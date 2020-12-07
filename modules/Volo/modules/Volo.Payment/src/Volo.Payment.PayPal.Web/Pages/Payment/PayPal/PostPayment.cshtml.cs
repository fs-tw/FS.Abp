using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using PayPalCheckoutSdk.Core;
using PayPalCheckoutSdk.Orders;
using Volo.Payment.PayPal;
using Volo.Payment.Requests;

namespace Volo.Payment.Paypal.Pages.Payment.PayPal
{
    public class PostPaymentModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string Token { get; set; }

        protected IPaymentRequestAppService PaymentRequestAppService { get; }
        
        protected PayPalHttpClient PayPalHttpClient { get; }

        public ILogger<PostPaymentModel> Logger { get; set; }

        private readonly IOptions<PaymentWebOptions> _paymentWebOptions;
        private readonly IPurchaseParameterListGenerator _purchaseParameterListGenerator;

        
        public PostPaymentModel(
            IPaymentRequestAppService paymentRequestAppService,
            IOptions<PaymentWebOptions> paymentWebOptions,
            PayPalHttpClient payPalHttpClient, 
            IPurchaseParameterListGenerator purchaseParameterListGenerator)
        {
            PaymentRequestAppService = paymentRequestAppService;
            _paymentWebOptions = paymentWebOptions;
            PayPalHttpClient = payPalHttpClient;
            _purchaseParameterListGenerator = purchaseParameterListGenerator;
            Logger = NullLogger<PostPaymentModel>.Instance;
        }

        public virtual async Task<IActionResult> OnGetAsync()
        {
            if (Token.IsNullOrWhiteSpace())
            {
                return BadRequest();
            }

            var request = new OrdersCaptureRequest(Token);
            request.RequestBody(new OrderActionRequest());
            var order = (await PayPalHttpClient.Execute(request)).Result<Order>();

            var paymentRequestId = Guid.Parse(order.PurchaseUnits.First().ReferenceId);
            
            await PaymentRequestAppService.CompleteAsync(new CompletePaymentRequestDto
            {
                GateWay = PayPalConsts.GatewayName,
                Id = paymentRequestId,
                Properties = new Dictionary<string, string>
                {
                    {"OrderId", order.Id}
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
            
            return Page();;
        }

        public virtual IActionResult OnPost()
        {
            return BadRequest();
        }
    }
}
