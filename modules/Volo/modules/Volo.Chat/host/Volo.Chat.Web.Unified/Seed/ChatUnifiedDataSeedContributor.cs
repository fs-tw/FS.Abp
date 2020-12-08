using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;

namespace Volo.Chat.Seed
{
    public class ChatUnifiedDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IdentityDataSeeder _identityDataSeeder;
        private readonly ChatDataSeeder _chatDataSeeder;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public ChatUnifiedDataSeedContributor(
            IdentityDataSeeder identityDataSeeder,
            ChatDataSeeder chatDataSeeder,
            IUnitOfWorkManager unitOfWorkManager)
        {
            _identityDataSeeder = identityDataSeeder;
            _chatDataSeeder = chatDataSeeder;
            _unitOfWorkManager = unitOfWorkManager;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _unitOfWorkManager.Current.SaveChangesAsync();
            await _identityDataSeeder.SeedAsync(context);
            await _unitOfWorkManager.Current.SaveChangesAsync();
            await _chatDataSeeder.SeedAsync(context);
        }
    }
}
