using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;

namespace Volo.Payment
{
    public class PaymentTestDataBuilder : ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private PaymentTestData _testData;

        public PaymentTestDataBuilder(
            IGuidGenerator guidGenerator,
            PaymentTestData testData)
        {
            _guidGenerator = guidGenerator;
            _testData = testData;
        }

        public void Build()
        {
            
        }
    }
}