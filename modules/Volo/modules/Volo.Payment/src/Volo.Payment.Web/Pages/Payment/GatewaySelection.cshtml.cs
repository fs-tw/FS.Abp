using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Payment.Requests;

namespace Volo.Payment.Pages.Payment
{
    public class GatewaySelectionModel : PaymentPageModel
    {
        [BindProperty]
        public Guid PaymentRequestId { get; set; }

        public List<PaymentGatewayWebConfiguration> Gateways { get; set; }
        
        public string CheckoutButtonStyle { get; set; }

        private readonly IPaymentRequestAppService _paymentRequestAppService;
        private readonly IOptions<PaymentWebOptions> _paymentWebOptions;

        public GatewaySelectionModel(
            IPaymentRequestAppService paymentRequestAppService,
            IOptions<PaymentWebOptions> paymentWebOptions)
        {
            _paymentRequestAppService = paymentRequestAppService;
            _paymentWebOptions = paymentWebOptions;
        }

        public virtual ActionResult OnGet()
        {
            return BadRequest();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            CheckoutButtonStyle = _paymentWebOptions.Value.GatewaySelectionCheckoutButtonStyle;

            var gateways = await _paymentRequestAppService.GetGatewayConfigurationAsync();
            Gateways = _paymentWebOptions.Value.Gateways.Where(g => gateways.ContainsKey(g.Key)).Select(g => g.Value).ToList();

            if (!Gateways.Any())
            {
                throw new ApplicationException("No payment gateway configured!");
            }

            if (Gateways.Count == 1)
            {
                var gateway = Gateways.First();
                return LocalRedirectPreserveMethod(gateway.PrePaymentUrl + "?paymentRequestId=" + PaymentRequestId);
            }

            return Page();
        }
    }
}