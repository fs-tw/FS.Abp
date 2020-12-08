using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Payment
{
    public abstract class MyEntityRepository_Tests<TStartupModule> : PaymentTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        [Fact]
        public async Task Test1()
        {

        }
    }
}
