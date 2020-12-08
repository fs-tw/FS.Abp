using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Volo.Payment.Requests;

namespace Volo.Payment.TwoCheckout.Pages.Payment.TwoCheckout
{
    public class PostPaymentModel : PageModel
    {
        protected IPaymentRequestAppService PaymentRequestAppService { get; }
        public ILogger<PostPaymentModel> Logger { get; set; }

        private readonly IOptions<PaymentWebOptions> _paymentWebOptions;
        private readonly IPurchaseUrlGenerator _purchaseUrlGenerator;

        public PostPaymentModel(
            IPaymentRequestAppService paymentRequestAppService,
            IOptions<PaymentWebOptions> paymentWebOptions, 
            IPurchaseUrlGenerator purchaseUrlGenerator)
        {
            PaymentRequestAppService = paymentRequestAppService;
            _paymentWebOptions = paymentWebOptions;
            _purchaseUrlGenerator = purchaseUrlGenerator;
            Logger = NullLogger<PostPaymentModel>.Instance;
        }

        public virtual async Task<IActionResult> OnGetAsync()
        {
            var paymentRequestId = Guid.Parse(Request.Query["paymentRequestId"]);

            Logger.LogInformation("2Checkout return url: " + Request.GetEncodedUrl());

            await PaymentRequestAppService.CompleteAsync(
                new CompletePaymentRequestDto
                {
                    GateWay = TwoCheckoutConsts.GatewayName,
                    Id = paymentRequestId,
                    Properties = new Dictionary<string, string>
                    {
                        { "ctrl", Request.Query["ctrl"]},
                        { "url", GetCurrentEncodedUrl()}
                    }
                });

            if (!_paymentWebOptions.Value.CallbackUrl.IsNullOrWhiteSpace())
            {
                var callbackUrl = _paymentWebOptions.Value.CallbackUrl + "?paymentRequestId=" + paymentRequestId;
                var paymentRequest = await PaymentRequestAppService.GetAsync(paymentRequestId);
                var extraPaymentParameters = _purchaseUrlGenerator.GetExtraParameterConfiguration(paymentRequest);

                if (!extraPaymentParameters.AdditionalCallbackParameters.IsNullOrEmpty())
                {
                    callbackUrl += "&" + extraPaymentParameters.AdditionalCallbackParameters;
                }

                Response.Redirect(callbackUrl);
            }

            return Page();
        }

        private string GetCurrentEncodedUrl()
        {
            // changes Scheme of return URL with the Scheme of the callback URL.
            var originatedScheme = new Uri(_paymentWebOptions.Value.CallbackUrl).Scheme;
            return UriHelper.BuildAbsolute(originatedScheme, Request.Host, Request.PathBase, Request.Path, Request.QueryString);
        }

        public virtual IActionResult OnPost()
        {
            return BadRequest();
        }
    }
}