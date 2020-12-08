using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Guids;
using Volo.Payment.Requests;

namespace Volo.Payment.EntityFrameworkCore
{
    public class EfCorePaymentRequestRepository_Tests : MyEntityRepository_Tests<PaymentEntityFrameworkCoreTestModule>
    {
        private readonly IPaymentRequestRepository _paymentRequestRepository;
        private readonly IGuidGenerator _guidGenerator;

        public EfCorePaymentRequestRepository_Tests()
        {
            _paymentRequestRepository = GetRequiredService<IPaymentRequestRepository>();
            _guidGenerator = GetRequiredService<IGuidGenerator>();
        }


        public async Task GetAsync()
        {
            var id = _guidGenerator.Create();

            await _paymentRequestRepository.InsertAsync(new PaymentRequest(id));
            (await _paymentRequestRepository.GetAsync(id)).ShouldNotBeNull();
        }
    }
}
