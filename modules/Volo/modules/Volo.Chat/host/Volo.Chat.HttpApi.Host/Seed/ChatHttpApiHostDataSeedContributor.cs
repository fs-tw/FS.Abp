using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.Chat.Seed
{
    public class ChatHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly ChatDataSeeder _chatDataSeeder;

        public ChatHttpApiHostDataSeedContributor(
            ChatDataSeeder chatDataSeeder)
        {
            _chatDataSeeder = chatDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _chatDataSeeder.SeedAsync(context);
        }
    }
}
