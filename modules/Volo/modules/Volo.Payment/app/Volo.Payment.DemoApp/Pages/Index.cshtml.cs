using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Volo.Payment.PayPal;
using Volo.Payment.Payu;
using Volo.Payment.Requests;
using Volo.Payment.Stripe;
using Volo.Payment.TwoCheckout;

namespace Volo.Payment.DemoApp.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IPaymentRequestAppService _paymentRequestAppService;

        [BindProperty]
        public int Product1Count { get; set; }

        [BindProperty]
        public int Product2Count { get; set; }

        [BindProperty]
        public int Product3Count { get; set; }

        public IndexModel(IPaymentRequestAppService paymentRequestAppService)
        {
            _paymentRequestAppService = paymentRequestAppService;
        }

        public void OnGet()
        {

        }

        public virtual async Task<IActionResult> OnPost()
        {
            var organizationId = Guid.NewGuid().ToString();

            var paymentRequestDto = new PaymentRequestCreateDto
            {
                ExtraProperties = new Dictionary<string, object>
                {
                    { "OrganizationId", organizationId },
                    {
                        PayuConsts.GatewayName,
                        new PayuPaymentRequestExtraParameterConfiguration
                        {
                            Currency = "TRY",
                            Installment = "2",
                            PriceType = "NET",
                            Shipping = 11,
                            AdditionalCallbackParameters = "s=1"
                        }
                    },
                    {
                        TwoCheckoutConsts.GatewayName,
                        new TwoCheckoutPaymentRequestExtraParameterConfiguration
                        {
                            Currency = "TRY",
                            AdditionalCallbackParameters = "s=1"
                        }
                    },
                    {
                        StripeConsts.GatewayName,
                        new StripePaymentRequestExtraParameterConfiguration
                        {
                            Currency = "EUR",
                            Locale = "it",
                            PaymentMethodTypes = new List<string>()
                            {
                                "alipay",
                                "sofort"
                            },
                            AdditionalCallbackParameters = "s=1"
                        }
                    },
                    {
                        PayPalConsts.GatewayName,
                        new PayPalPaymentRequestExtraParameterConfiguration
                        {
                            CurrencyCode = "EUR",
                            Locale = "en",
                            AdditionalCallbackParameters = "s=1"
                        }
                    }
                }
            };


            if (Product1Count > 0)
            {
                paymentRequestDto.Products.Add(new PaymentRequestProductCreateDto
                {
                    Code = "001",
                    Count = Product1Count,
                    Name = "Personal License",
                    UnitPrice = 999,
                    TotalPrice = Product1Count * 999,
                    ExtraProperties = new Dictionary<string, IPaymentRequestProductExtraParameterConfiguration>
                    {
                        {
                            PayuConsts.GatewayName,
                            new PayuPaymentRequestProductExtraParameterConfiguration
                            {
                                VatRate = 10
                            }
                        },
                        {
                            TwoCheckoutConsts.GatewayName,
                            new TwoCheckoutPaymentRequestProductExtraParameterConfiguration
                            {
                                ProductCode = "27933154"
                            }
                        }
                    }
                });
            }

            if (Product2Count > 0)
            {
                paymentRequestDto.Products.Add(new PaymentRequestProductCreateDto
                {
                    Code = "002",
                    Count = Product2Count,
                    Name = "Team License",
                    UnitPrice = 1999,
                    TotalPrice = Product2Count * 1999,
                    ExtraProperties = new Dictionary<string, IPaymentRequestProductExtraParameterConfiguration>
                    {
                        {
                            TwoCheckoutConsts.GatewayName,
                            new TwoCheckoutPaymentRequestProductExtraParameterConfiguration
                            {
                                ProductCode = "28054022"
                            }
                        }
                    }
                });
            }

            if (Product3Count > 0)
            {
                paymentRequestDto.Products.Add(new PaymentRequestProductCreateDto
                {
                    Code = "003",
                    Count = Product3Count,
                    Name = "Enterprise License",
                    UnitPrice = 4999,
                    TotalPrice = Product3Count * 4999,
                    ExtraProperties = new Dictionary<string, IPaymentRequestProductExtraParameterConfiguration>()
                    {
                        {
                            TwoCheckoutConsts.GatewayName,
                            new TwoCheckoutPaymentRequestProductExtraParameterConfiguration
                            {
                                ProductCode = "27933154"
                            }
                        }
                    }
                });
            }

            var paymentRequest = await _paymentRequestAppService.CreateAsync(paymentRequestDto);

            return LocalRedirectPreserveMethod("/Payment/GatewaySelection?paymentRequestId=" + paymentRequest.Id);
        }
    }
}
