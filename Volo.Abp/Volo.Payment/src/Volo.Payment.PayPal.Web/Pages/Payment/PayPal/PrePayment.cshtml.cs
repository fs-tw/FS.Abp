using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PayPalCheckoutSdk.Core;
using PayPalCheckoutSdk.Orders;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Payment.PayPal;
using Volo.Payment.Requests;

namespace Volo.Payment.Paypal.Pages.Payment.PayPal
{
    public class PrePaymentModel : AbpPageModel
    {
        [BindProperty]
        public Guid PaymentRequestId { get; set; }

        protected PaymentRequestWithDetailsDto PaymentRequest { get; set; }
        
        protected PayPalHttpClient PayPalHttpClient { get; }
        
        protected PaymentWebOptions PaymentWebOptions { get; }
        
        protected IPaymentRequestAppService PaymentRequestAppService { get; }

        private readonly IPurchaseParameterListGenerator _purchaseParameterListGenerator;
        
        public PrePaymentModel(
            PayPalHttpClient payPalHttpClient,
            IOptions<PaymentWebOptions> paymentWebOptions,
            IPaymentRequestAppService paymentRequestAppService, 
            IPurchaseParameterListGenerator purchaseParameterListGenerator)
        {
            PayPalHttpClient = payPalHttpClient;
            PaymentWebOptions = paymentWebOptions.Value;
            PaymentRequestAppService = paymentRequestAppService;
            _purchaseParameterListGenerator = purchaseParameterListGenerator;
        }

        public virtual IActionResult OnGet()
        {
            return BadRequest();
        }

        public virtual async Task OnPostAsync()
        {
            PaymentRequest = await PaymentRequestAppService.GetAsync(PaymentRequestId);
            var purchaseParameters = _purchaseParameterListGenerator.GetExtraParameterConfiguration(PaymentRequest);
            
            var order = new OrderRequest
            {
                CheckoutPaymentIntent = "CAPTURE",
                ApplicationContext = new ApplicationContext
                {
                    ReturnUrl = PaymentWebOptions.RootUrl.RemovePostFix("/") + PayPalConsts.PostPaymentUrl,
                    CancelUrl = PaymentWebOptions.RootUrl,
                    Locale = purchaseParameters.Locale
                },
                PurchaseUnits = new List<PurchaseUnitRequest>
                {
                    new PurchaseUnitRequest
                    {
                        AmountWithBreakdown = new AmountWithBreakdown
                        {
                            AmountBreakdown = new AmountBreakdown
                            {
                                ItemTotal = new Money
                                {
                                    CurrencyCode = purchaseParameters.CurrencyCode,
                                    Value = PaymentRequest.Products.Sum(product => product.TotalPrice).ToString(".00")
                                }
                            },
                            CurrencyCode = purchaseParameters.CurrencyCode,
                            Value = PaymentRequest.Products.Sum(product => product.TotalPrice).ToString(".00"),
                        },
                        Items = PaymentRequest.Products.Select(product => new Item
                        {
                            Quantity = product.Count.ToString(),
                            Name = product.Name,
                            UnitAmount = new Money
                            {
                                CurrencyCode = purchaseParameters.CurrencyCode,
                                Value = product.UnitPrice.ToString(".00")
                            }
                        }).ToList(),
                        ReferenceId = PaymentRequest.Id.ToString()
                    }
                }
            };

            var request = new OrdersCreateRequest();
            request.Prefer("return=representation");
            request.RequestBody(order);

            var result = (await PayPalHttpClient.Execute(request)).Result<Order>();

            Response.Redirect(result.Links.First(x => x.Rel == "approve").Href);
        }
    }
}
