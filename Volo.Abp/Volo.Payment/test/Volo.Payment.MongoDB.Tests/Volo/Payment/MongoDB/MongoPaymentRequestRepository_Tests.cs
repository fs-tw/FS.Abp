using System.Threading.Tasks;
using Shouldly;
using Xunit;
using Volo.Abp.Guids;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class MongoPaymentRequestRepository_Tests : MyEntityRepository_Tests<PaymentMongoDbTestModule>
    {
        private readonly IPaymentRequestRepository _paymentRequestRepository;
        private readonly IGuidGenerator _guidGenerator;

        public MongoPaymentRequestRepository_Tests()
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
