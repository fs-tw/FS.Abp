using System;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Payment.Gateways;
using Volo.Payment.Requests;

namespace Volo.Payment.Payu
{
    public class PayuPaymentGateway : IPaymentGateway, ITransientDependency
    {
        private readonly PayuOptions _options;

        public PayuPaymentGateway(IOptions<PayuOptions> options)
        {
            _options = options.Value;
        }

        public bool IsValid(PaymentRequest paymentRequest, Dictionary<string, string> properties)
        {
            var controlString = properties["ctrl"];

            if (controlString.IsNullOrWhiteSpace())
            {
                throw new Exception("Empty control string.");
            }

            var url = properties["url"];

            if (url.IsNullOrWhiteSpace())
            {
                throw new Exception("Empty url parameter.");
            }

            var urlWithoutControlString = url.Replace("&ctrl=" + controlString, "").Replace("?ctrl=" + controlString, "");

            var hashString = urlWithoutControlString.Length + urlWithoutControlString;
            var hash = HmacMd5HashHelper.GetMd5Hash(hashString, _options.Signature);

            return hash == controlString.ToLowerInvariant();
        }
    }
}
