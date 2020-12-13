using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Payment.Gateways;

namespace Volo.Payment.Requests
{
    public class PaymentRequestAppService : PaymentAppServiceBase, IPaymentRequestAppService
    {
        protected IPaymentRequestRepository PaymentRequestRepository { get; }
        private readonly IServiceProvider _serviceProvider;

        private readonly PaymentOptions _paymentGatewayOptions;
        private readonly IOptions<PaymentOptions> _paymentOptions;

        public PaymentRequestAppService(
            IPaymentRequestRepository paymentRequestRepository,
            IServiceProvider serviceProvider,
            IOptions<PaymentOptions> paymentGatewayOptions, 
            IOptions<PaymentOptions> paymentOptions)
        {
            PaymentRequestRepository = paymentRequestRepository;
            _serviceProvider = serviceProvider;
            _paymentOptions = paymentOptions;
            _paymentGatewayOptions = paymentGatewayOptions.Value;
        }

        public async Task<PaymentRequestWithDetailsDto> CreateAsync(PaymentRequestCreateDto input)
        {
            var paymentRequest = new PaymentRequest(GuidGenerator.Create());

            foreach (var extraProperty in input.ExtraProperties)
            {
                paymentRequest.SetProperty(extraProperty.Key, extraProperty.Value);
            }

            foreach (var productDto in input.Products)
            {
                paymentRequest.AddProduct(
                    productDto.Code,
                    productDto.Name,
                    productDto.UnitPrice,
                    productDto.Count,
                    productDto.TotalPrice,
                    productDto.ExtraProperties);
            }

            var insertedPaymentRequest = await PaymentRequestRepository.InsertAsync(paymentRequest);

            return ObjectMapper.Map<PaymentRequest, PaymentRequestWithDetailsDto>(insertedPaymentRequest);
        }

        public async Task<PaymentRequestWithDetailsDto> GetAsync(Guid id)
        {
            var paymentRequest = await PaymentRequestRepository.GetAsync(id);
            return await GetPaymentRequestWithDetailsDtoAsync(paymentRequest);
        }

        public async Task<PaymentRequestWithDetailsDto> CompleteAsync(CompletePaymentRequestDto input)
        {
            var paymentRequest = await PaymentRequestRepository.GetAsync(input.Id);

            using (var scope = _serviceProvider.CreateScope())
            {
                var paymentGateway = scope.ServiceProvider.GetService(
                    _paymentGatewayOptions.Gateways
                        .Single(pg => pg.Key == input.GateWay).Value.PaymentGatewayType
                ) as IPaymentGateway;

                if (paymentGateway == null)
                {
                    throw new Exception("Invalid payment gateway type.");
                }

                if (!paymentGateway.IsValid(paymentRequest, input.Properties))
                {
                    throw new Exception("Your payment is not valid.");
                }
            }

            foreach (var property in input.Properties)
            {
                paymentRequest.SetProperty(property.Key, property.Value);
            }

            paymentRequest.Gateway = input.GateWay;
            paymentRequest.Complete();

            await PaymentRequestRepository.UpdateAsync(paymentRequest);

            return await GetPaymentRequestWithDetailsDtoAsync(paymentRequest);
        }

        public async Task<PaymentRequestWithDetailsDto> SetCurrencyAsync(SetPaymentRequestCurrencyDto input)
        {
            var paymentRequest = await PaymentRequestRepository.GetAsync(input.Id);
            paymentRequest.Currency = input.Currency;

            return await GetPaymentRequestWithDetailsDtoAsync(paymentRequest);
        }

        public Task<PaymentGatewayConfigurationDictionary> GetGatewayConfigurationAsync()
        {
            return Task.FromResult(_paymentOptions.Value.Gateways);
        }

        private async Task<PaymentRequestWithDetailsDto> GetPaymentRequestWithDetailsDtoAsync(PaymentRequest paymentRequest)
        {
            return ObjectMapper.Map<PaymentRequest, PaymentRequestWithDetailsDto>(
                await PaymentRequestRepository.GetAsync(paymentRequest.Id, includeDetails: true)
            );
        }
    }
}