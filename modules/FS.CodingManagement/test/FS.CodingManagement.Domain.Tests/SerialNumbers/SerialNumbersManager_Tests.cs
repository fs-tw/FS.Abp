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
        public async Task Method1Async()
        {
            await WithUnitOfWorkAsync(async () =>
            {
                var first = await _serialNumbersManager.GenerateAsync(ProviderOptions.DefaultProviderName, System.DateTime.Now.ToString("yyyy/MM/dd"));
                return Task.CompletedTask;
            });

            await WithUnitOfWorkAsync(async () =>
            {
                var second = await _serialNumbersManager.GenerateAsync(ProviderOptions.DefaultProviderName, System.DateTime.Now.ToString("yyyy/MM/dd"));
                return Task.CompletedTask;
            });



        }
    }
}
