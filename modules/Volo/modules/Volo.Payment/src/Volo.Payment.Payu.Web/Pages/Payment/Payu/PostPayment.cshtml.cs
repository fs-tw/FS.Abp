using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Payment.Requests;

namespace Volo.Payment.Payu.Pages.Payment.Payu
{
    public class PostPaymentModel : PageModel
    {
        private readonly IOptions<PaymentWebOptions> _paymentWebOptions;
        private readonly IPurchaseParameterListGenerator _purchaseParameterListGenerator;

        protected IPaymentRequestAppService PaymentRequestAppService { get; }
        
        public ILogger<PostPaymentModel> Logger { get; set; }

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
            var paymentRequestId = Guid.Parse(Request.Query["paymentRequestId"]);

            Logger.LogInformation("PayU return url: " + Request.GetEncodedUrl());

            await PaymentRequestAppService.CompleteAsync(
                new CompletePaymentRequestDto
                {
                    GateWay = PayuConsts.GatewayName,
                    Id = paymentRequestId,
                    Properties = new Dictionary<string, string>
                    {
                        { "ctrl", Request.Query["ctrl"]},
                        { "payrefno", Request.Query["payrefno"]},
                        { "url", GetCurrentEncodedUrl()}
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
