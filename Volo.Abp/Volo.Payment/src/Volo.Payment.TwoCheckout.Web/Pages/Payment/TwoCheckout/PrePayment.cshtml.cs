using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Payment.Requests;

namespace Volo.Payment.TwoCheckout.Pages.Payment.TwoCheckout
{
    public class PrePaymentModel : AbpPageModel
    {
        [BindProperty]
        public Guid PaymentRequestId { get; set; }

        protected PaymentRequestWithDetailsDto PaymentRequest { get; set; }

        protected TwoCheckoutOptions TwoCheckoutOptions { get; }

        protected IPaymentRequestAppService PaymentRequestAppService { get; }

        private readonly IPurchaseUrlGenerator _purchaseUrlGenerator;

        public PrePaymentModel(
            IOptions<PaymentOptions> paymentGatewayOptions,
            IOptions<TwoCheckoutOptions> twoCheckoutOptions,
            IPaymentRequestAppService paymentRequestAppService,
            IPurchaseUrlGenerator purchaseUrlGenerator)
        {
            PaymentRequestAppService = paymentRequestAppService;
            _purchaseUrlGenerator = purchaseUrlGenerator;
            TwoCheckoutOptions = twoCheckoutOptions.Value;
        }

        public virtual ActionResult OnGet()
        {
            return BadRequest();
        }

        public virtual async Task OnPostAsync()
        {
            PaymentRequest = await PaymentRequestAppService.GetAsync(PaymentRequestId);

            var currency = _purchaseUrlGenerator.GetCurrency(PaymentRequest);

            await PaymentRequestAppService.SetCurrencyAsync(new SetPaymentRequestCurrencyDto
            {
                Id = PaymentRequestId,
                Currency = currency
            });

            var url = _purchaseUrlGenerator.GetUrl(PaymentRequest);
            Response.Redirect(url);
        }
    }
}