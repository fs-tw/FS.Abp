using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Volo.Payment.Requests;
using Xunit;

namespace Volo.Payment
{
    public class PaymentRequestAppService_Tests : PaymentTestBase<PaymentApplicationTestModule>
    {
        private readonly IPaymentRequestAppService _paymentRequestAppService;

        public PaymentRequestAppService_Tests()
        {
            _paymentRequestAppService = GetRequiredService<IPaymentRequestAppService>();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var paymentRequestDto = await CreateTestPaymentRequestAsync();

            paymentRequestDto.State.ShouldBe(PaymentRequestState.Waiting);
            paymentRequestDto.Products.Count.ShouldBe(1);
        }

        [Fact]
        public async Task GetAsync()
        {
            var paymentRequestDto = await CreateTestPaymentRequestAsync();

            var paymentRequest = await _paymentRequestAppService.GetAsync(paymentRequestDto.Id);
            paymentRequest.ShouldNotBeNull();
        }

        [Fact]
        public async Task SetCurrencyAsync()
        {
            var paymentRequestDto = await CreateTestPaymentRequestAsync();

            var paymentRequest = await _paymentRequestAppService.SetCurrencyAsync(new SetPaymentRequestCurrencyDto
            {
                Id = paymentRequestDto.Id,
                Currency = "EUR"
            });

            paymentRequest.Currency.ShouldBe("EUR");
        }

        [Fact]
        public async Task CompleteAsync()
        {
            var paymentRequestDto = await CreateTestPaymentRequestAsync();

            var paymentRequest = await _paymentRequestAppService.CompleteAsync(new CompletePaymentRequestDto
            {
                Id = paymentRequestDto.Id,
                GateWay = "Test",
                Properties = new Dictionary<string, string>()
            });

            paymentRequest.State.ShouldBe(PaymentRequestState.Completed);
        }

        [Fact]
        public async Task GetGatewayConfigurationAsync()
        {
            var gatewayConfiguration = await _paymentRequestAppService.GetGatewayConfigurationAsync();
            gatewayConfiguration.ShouldNotBeNull();
        }

        private async Task<PaymentRequestWithDetailsDto> CreateTestPaymentRequestAsync()
        {
            return await _paymentRequestAppService.CreateAsync(new PaymentRequestCreateDto()
            {
                Products = new List<PaymentRequestProductCreateDto>
                {
                    new PaymentRequestProductCreateDto
                    {
                        Code = "001",
                        Count = 1,
                        Name = "Abp Commercial",
                        UnitPrice = 100,
                        TotalPrice = 100,
                        ExtraProperties = new Dictionary<string, IPaymentRequestProductExtraParameterConfiguration>
                        {
                            {"PayPal", new TestGatewayPaymentRequestProductExtraParameterConfiguration() }
                        }
                    }
                }
            });
        }

        internal class TestGatewayPaymentRequestProductExtraParameterConfiguration : IPaymentRequestProductExtraParameterConfiguration
        {

        }
    }
}
