using Shouldly;
using System.Threading.Tasks;
using Xunit;

namespace FS.CodingManagement.SerialNumbers
{
    public class SerialNumbersanager_Tests : CodingManagementDomainTestBase
    {
        private readonly SerialNumbersManager _serialNumbersManager;

        public SerialNumbersanager_Tests()
        {
            _serialNumbersManager = GetRequiredService<SerialNumbersManager>();
        }

        [Fact]
        public async Task Should_Generated_Correctly()
        {
            await WithUnitOfWorkAsync(async () =>
            {
                var first = await _serialNumbersManager.GenerateAsync(ProviderOptions.DefaultProviderName, System.DateTime.Now.ToString("yyyy/MM/dd"));
                var second = await _serialNumbersManager.GenerateAsync(ProviderOptions.DefaultProviderName, System.DateTime.Now.ToString("yyyy/MM/dd"));

                first.ShouldBe("000001");
                second.ShouldBe("000002");
                return Task.CompletedTask;
            });

            await WithUnitOfWorkAsync(async () =>
            {
                var third = await _serialNumbersManager.GenerateAsync(ProviderOptions.DefaultProviderName, System.DateTime.Now.ToString("yyyy/MM/dd"));
                third.ShouldBe("000003");
                return Task.CompletedTask;
            });



        }
    }
}
