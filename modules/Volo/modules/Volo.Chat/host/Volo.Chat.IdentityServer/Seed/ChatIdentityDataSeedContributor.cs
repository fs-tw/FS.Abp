using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.Chat.Seed
{
    public class ChatIdentityDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IdentityDataSeeder _identityDataSeeder;
        private readonly IdentityServerDataSeeder _identityServerDataSeeder;

        public ChatIdentityDataSeedContributor(
            IdentityDataSeeder identityDataSeeder,
            IdentityServerDataSeeder identityServerDataSeeder)
        {
            _identityDataSeeder = identityDataSeeder;
            _identityServerDataSeeder = identityServerDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _identityDataSeeder.SeedAsync(context);
            await _identityServerDataSeeder.SeedAsync(context);
        }
    }
}
